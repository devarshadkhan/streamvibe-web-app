import React from "react";
import img11 from "../../../assets/images/Image (11).png";
import img12 from "../../../assets/images/Image (12).png"
import img13 from "../../../assets/images/Image (13).png"
import img14 from "../../../assets/images/Image (14).png"
import img15 from "../../../assets/images/Image (15).png"
import img16 from "../../../assets/images/Image (16).png"
import img17 from "../../../assets/images/Image (17).png"
import img18 from "../../../assets/images/Image (18).png"
import img19 from "../../../assets/images/Image (19).png"
import img20 from "../../../assets/images/Image (20).png"
// import img3 from "../../../assets/images/Image (3).png"
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../AnimtedMarquee.module.css"
const LineTwo = () => {
  return (
    <>
      <Box className="lin1">
        <Marquee direction="right" speed={18} gradient gradientColor="#141414" gradientWidth={100} >
          <Image src={img11} alt="" className={styles.imageS} />
          <Image src={img12} alt="" className={styles.imageS} />
          <Image src={img13} alt="" className={styles.imageS} />
          <Image src={img14} alt="" className={styles.imageS} />
          <Image src={img15} alt="" className={styles.imageS} />
          <Image src={img16} alt="" className={styles.imageS} />
          <Image src={img17} alt="" className={styles.imageS} />
          <Image src={img18} alt="" className={styles.imageS} />
          <Image src={img19} alt="" className={styles.imageS} />
          <Image src={img20} alt="" className={styles.imageS} />
        </Marquee>
      </Box>
    </>
  );
};

export default LineTwo;
