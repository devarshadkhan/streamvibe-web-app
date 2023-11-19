import React from "react";
import img31 from "../../../assets/images/Image (31).png";
import img32 from "../../../assets/images/Image (32).png"
import img33 from "../../../assets/images/Image (33).png"
import img34 from "../../../assets/images/Image (34).png"
import img35 from "../../../assets/images/Image (35).png"
import img36 from "../../../assets/images/Image (16).png"
import img9 from "../../../assets/images/Image (9).png"
import img8 from "../../../assets/images/Image (8).png"
import img6 from "../../../assets/images/Image (6).png"
import img2 from "../../../assets/images/Image (2).png"
// import img3 from "../../../assets/images/Image (3).png"
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../AnimtedMarquee.module.css"
const LineFour = () => {
  return (
    <>
      <Box className="lin1">
        <Marquee direction="right" speed={18} gradient gradientColor="#141414" gradientWidth={100}>
          <Image src={img31} alt="" className={styles.imageS} />
          <Image src={img32} alt="" className={styles.imageS} />
          <Image src={img33} alt="" className={styles.imageS} />
          <Image src={img34} alt="" className={styles.imageS} />
          <Image src={img35} alt="" className={styles.imageS} />
          <Image src={img36} alt="" className={styles.imageS} />
          <Image src={img9} alt="" className={styles.imageS} />
          <Image src={img8} alt="" className={styles.imageS} />
          <Image src={img6} alt="" className={styles.imageS} />
          <Image src={img2} alt="" className={styles.imageS} />
        </Marquee>
      </Box>
    </>
  );
};

export default LineFour;
