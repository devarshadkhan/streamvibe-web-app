import React, { useEffect } from "react";
import styles from "./MovieCard.module.css";
import { Box } from "@mui/material";
import Image from "next/image";
import image1 from "../../assets/images/Image (1).png";
import arraow from "../../assets/svg_icon/arraow-right.svg";
import Link from "next/link";
const MovieCard = ({ item }) => {
console.log(item);
  return (
    <>
      <Box className={styles.MovieCard}>
       {/* <Link href={`explore/${item.media_type}/${item.id}`}> */}
       <Link href={{
        pathname:`explore`,
        query:{
          id:item?.id,
          media_type:item?.media_type
        }
        
       }}>
       <Box className={styles.ImageBox}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
            width={100}
            height={192}
          />
          <Box className={styles.text}>
            <h6>
              {item?.title && item?.title?.length > 13
                ? `${item?.title.substr(0, 10)}...`
                : item?.title ||
                  (item?.name && item?.name?.length > 7
                    ? `${item?.name?.substr(0, 10)}...`
                    : item?.name)}
            </h6>
            {/* <h6>{item.title || `${item.name === 12 ? `${item.name?.toString().substr(0,12)}...` : item.name}` }</h6> */}
            {/* <h6>{item.title?.toString().substr(0,12) || `${item.name?.toString().substr(0,12)}...`}</h6> */}
            <Image src={arraow} />
          </Box>
        </Box>
       </Link>
      </Box>
    </>
  );
};

export default MovieCard;
