// "use client"
// import  React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Container, Grid } from "@mui/material";
// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];
// import styles from "./Navbar.module.css"
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "../../assets/images/Logo.png"
// import search_Icon from "../../assets/svg_icon/search.svg"
// import Bell from "../../assets/svg_icon/bell.svg"
// function Navbar(props) {
//     const router = usePathname();
//     console.log(router);
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const updateScroll = () => {
//       if (typeof window !== "undefined") {
//         window.scrollY >= 90 ? setScrolled(true) : setScrolled(false);
//       }
//     };

//     // Check if window is defined before adding the event listener
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", updateScroll);

//       // Clean up the event listener when the component unmounts
//       return () => {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   }, []);
//   /**
//    *  Responsive Show side panel content
//    * NavItems
//    */
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
      
//     </Box>
//   );

//   const container =
//   typeof window !== "undefined" ? () => window.document.body : undefined;
    
//   return (
//     <Box className={styles.header_wrp} >
//     <CssBaseline />
//     {/* <Toolbar /> */}
//       <AppBar  className={isScrolled ? styles.navbars : styles.navbar} >
//         <Toolbar className={styles.toolbar}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

          // <Container>
          //   <Grid container  spacing={2} alignItems={"center"}>
          //     {/* Logo Here */}
          //     <Grid item lg={3}>
          //       <Box className={styles.logo_set} component={"div"} >
          //       <Image src={logo}   /> 
          //       </Box>
          //     </Grid>
          //     {/* Listing Items for Linking */}
          //     <Grid item lg={6} sx={{ display: { xs: "none", sm: "block" }}} >
          //       <Box className={styles.list_wrp_ul} component={"ul"}>
          //         <Box className={styles.list_wrp_li} component={"li"}>
          //           <Link href={"/"}  className={router === "/" ? styles.active : ""} >Home</Link>
          //         </Box>
          //         <Box className={styles.list_wrp_li} component={"li"}>
          //           <Link  href={""}>Movies & Shows</Link>
          //         </Box>
          //         <Box className={styles.list_wrp_li} component={"li"}>
          //           <Link  href={""}>TV & Shows</Link>
          //         </Box>
          //         <Box className={styles.list_wrp_li} component={"li"}>
          //           <Link  href={""}>Support</Link>
          //         </Box>
          //         <Box className={styles.list_wrp_li} component={"li"}>
          //           <Link  href={""}>Subscriptions</Link>
          //         </Box>
          //       </Box>
          //     </Grid>
          //     <Grid item lg={3}>
          //     <Image src={search_Icon}   /> 
          //     <Image src={Bell}   /> 
          //     </Grid>
          //   </Grid>
          // </Container>
//         </Toolbar>
//       </AppBar>

//       {/* Responsive Show navbar sidepanel  */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default Navbar;
// // sx={{ display: { xs: "none", sm: "block" }, alignItems:"center", justifyContent:"flex-end" }} responsive hide list item


"use client"
import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/Logo.png"
import search_Icon from "../../assets/svg_icon/search.svg"
import Bell from "../../assets/svg_icon/bell.svg"
import styles from "./Navbar.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
   const router = usePathname();
   const [scrolled, setScrolled] = useState(false);
     useEffect(() => {
    const updateScroll = () => {
      // if (typeof window !== "undefined") {
        window.scrollY >= 180 ? setScrolled(true) : setScrolled(false);
      // }
    };

    // Check if window is defined before adding the event listener
    // if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    // }
  }, []);
  return (
    <>
    <header className={`${scrolled ? styles.scrolled :  styles.header_wrp}`}>
    {/* <header className={`${styles.header_wrp} ${scrolled ? styles.scrolled : styles.scrolled}`}> */}
                <Container>
            <Row >
              {/* Logo Here */}
              <Col  lg={3}>
                <div className={styles.logo_set}  >
                <Image src={logo}   /> 
                </div>
              </Col>
              {/* Listing Items for Linking */}
              <Col  lg={6}  >
                <ul className={styles.list_wrp_ul} component={"ul"}>
                  <li className={styles.list_wrp_li} component={"li"}>
                    <Link href={"/"}  className={router === "/" ? styles.active : ""} >Home</Link>
                  </li>
                  <li className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>Movies & Shows</Link>
                  </li>
                  <li className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>TV & Shows</Link>
                  </li>
                  <li className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>Support</Link>
                  </li>
                  <li className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>Subscriptions</Link>
                  </li>
                </ul>
              </Col>
              <Col  lg={3}>
              <div className={styles.icnons}>
              <Image src={search_Icon}   /> 
              <Image src={Bell}   /> 
              </div>
              </Col>
            </Row>
          </Container>
          </header>
    </>
  )
}

export default Navbar