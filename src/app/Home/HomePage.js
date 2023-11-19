"use client";
import { Box, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import banner from "../../assets/images/main-banner-center-home.png";
import img1 from "../../assets/images/Image (1).png";
import img2 from "../../assets/images/Image (2).png";
import img3 from "../../assets/images/Image (3).png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import LineOne from "@/components/Animated_Marquee/Line_one/LineOne";
import LineTwo from "@/components/Animated_Marquee/Line_two/LineTwo";
import styles from "./Homepage.module.css";
import LineThird from "@/components/Animated_Marquee/Line_Third/LineThird";
import LineFour from "@/components/Animated_Marquee/Line_Four/LineFour";
import MovieCard from "@/components/MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { trendind_all } from "@/redux-feature/Trending-Api/All";
const HomePage = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch()
  const trendingMovieAllData = useSelector((state)=>state.trendAllData.data.results)
  console.log("++++++++++++++++++++++++++++++++++++++++",trendingMovieAllData);
 

    const [seld,setSeld] = useState("day")
    console.log("pppppppppppppppppppppppppppppp",seld);
    const handleChange = (e)=>{
      setSeld(e.target.value)
    }
    useEffect(() => {
      dispatch(trendind_all(seld)).then((res)=>{
          console.log(res);
      });
    }, [seld]);
  return (
    <>
      <Box className={styles.homepage_wrp}>
        <Box className={styles.fadeTop}>
          <LineOne />
          <LineTwo />
        </Box>
        <Box className={styles.fadeBottom}>
          <LineThird />
          <LineFour />
        </Box>

        <Box className={styles.hone_secnd_wrp}>
          <Container>
            <Grid container>
              <Grid item lg={12}>
                <Box className={styles.heading_title}>
                  <h1>The Best Streaming Experience</h1>
                  <p>
                    StreamVibe is the best streaming experience for watching
                    your favorite movies and shows on demand, anytime, anywhere.
                    With StreamVibe, you can enjoy a wide variety of content,
                    including the latest blockbusters, classic movies, popular
                    TV shows, and more. You can also create your own watchlists,
                    so you can easily find the content you want to watch.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className={styles.home_third_wrp}>
          <Container>
            <Grid container>
              <Grid item lg={12}>
                <Box className={styles.category_movie_list}>
                  <h3>Explore our wide variety of categories</h3>
                  <p>
                    Whether you're looking for a comedy to make you laugh, a
                    drama to make you think, or a documentary to learn something
                    new
                  </p>
                </Box>

                <Box className={styles.sliders_wrp}>
                <select name="" id="" value={seld} onChange={handleChange}>
  <option value="day" >day</option>
  <option value="week">week</option>
</select>
                  <Slider {...settings} ref={slider}>
                    {trendingMovieAllData?.map((item, index) => (
                      <div>
                        <MovieCard item={item} />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
