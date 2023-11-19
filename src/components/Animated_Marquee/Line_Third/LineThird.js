import React from "react";
import img21 from "../../../assets/images/Image (21).png";
import img22 from "../../../assets/images/Image (22).png";
import img23 from "../../../assets/images/Image (23).png";
import img24 from "../../../assets/images/Image (24).png";
import img25 from "../../../assets/images/Image (25).png";
import img26 from "../../../assets/images/Image (26).png";
import img27 from "../../../assets/images/Image (27).png";
import img28 from "../../../assets/images/Image (28).png";
import img29 from "../../../assets/images/Image (29).png";
import img30 from "../../../assets/images/Image (30).png";
// import img21 from "../../../assets/images/Image (11).png";
// import img3 from "../../../assets/images/Image (3).png"
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../AnimtedMarquee.module.css"
const LineThird = () => {
  return (
    <>
      <Box className="lin1">
        <Marquee direction="left" speed={19} gradient gradientColor="#141414" gradientWidth={100} >
          <Image src={img21} alt="" className={styles.imageS} />
          <Image src={img22} alt="" className={styles.imageS} />
          <Image src={img23} alt="" className={styles.imageS} />
          <Image src={img24} alt="" className={styles.imageS} />
          <Image src={img25} alt="" className={styles.imageS} />
          <Image src={img26} alt="" className={styles.imageS} />
          <Image src={img27} alt="" className={styles.imageS} />
          <Image src={img28} alt="" className={styles.imageS} />
          <Image src={img29} alt="" className={styles.imageS} />
          <Image src={img30} alt="" className={styles.imageS} />
        </Marquee>
      </Box>
    </>
  );
};

export default LineThird;
