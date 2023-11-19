import React from "react";
import img1 from "../../../assets/images/Image (1).png";
import img2 from "../../../assets/images/Image (2).png"
import img3 from "../../../assets/images/Image (3).png"
import img4 from "../../../assets/images/Image (4).png"
import img5 from "../../../assets/images/Image (5).png"
import img6 from "../../../assets/images/Image (6).png"
import img7 from "../../../assets/images/Image (7).png"
import img8 from "../../../assets/images/Image (8).png"
import img9 from "../../../assets/images/Image (9).png"
import img10 from "../../../assets/images/Image (10).png"
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../AnimtedMarquee.module.css"
const LineOne = () => {
  return (
    <>
      <Box className="lin1" style={{overflow:"hidden"}} >
        <Marquee direction="left" speed={19} gradient gradientColor="#141414" gradientWidth={100}>
          <Image src={img1} alt="" className={styles.imageS} />
          <Image src={img2} alt="" className={styles.imageS} />
          <Image src={img3} alt="" className={styles.imageS} />
          <Image src={img4} alt="" className={styles.imageS} />
          <Image src={img5} alt="" className={styles.imageS}/>
          <Image src={img6} alt="" className={styles.imageS} />
          <Image src={img7} alt="" className={styles.imageS} />
          <Image src={img8} alt="" className={styles.imageS} />
          <Image src={img9} alt="" className={styles.imageS} />
          <Image src={img10} alt="" className={styles.imageS} />
        </Marquee>
      </Box>
    </>
  );
};

export default LineOne;
