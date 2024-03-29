"use client";
import { Box } from "@mui/material";
import Container from "react-bootstrap/Container";

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
import {
  trendAllData_day_by_Week,
  trendind_all,
} from "@/redux-feature/Trending-Api/Trending_day_by_week_slice";
import SelectTag from "@/components/Select_Tag/SelectTag";
import { Col, Row } from "react-bootstrap";
import { various_device } from "@/utils/MockData/MockData";
import Down from "../../assets/svg_icon/accordion-down.svg"
import Up from "../../assets/svg_icon/accordion-up.svg"
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

  const dispatch = useDispatch();
  const trendingMovieAllData = useSelector(
    (state) => state.trendAllData.data.results
  );

  const select_by_day_Week = useSelector(
    (state) => state.trendAllData.selectedOptionEndPoint
  );

  const handleChange = (e) => {
    dispatch(trendAllData_day_by_Week(e.target.value));
  };
  useEffect(() => {
    dispatch(trendind_all()).then((res) => {
      console.log(res);
    });
  }, [dispatch, select_by_day_Week]);


  /**
   * Accordion 
   * 
   */
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
            <Row>
              <Col>
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
              </Col>
            </Row>
          </Container>
        </Box>
        <Box className={styles.home_third_wrp}>
          <Container>
            <Row>
              <Col>
                <Box className={styles.category_movie_list}>
                  <Box>
                    <h3>Explore our wide variety of categories</h3>
                    <p>
                      Whether you're looking for a comedy to make you laugh, a
                      drama to make you think, or a documentary to learn
                      something new
                    </p>
                  </Box>

                  <SelectTag
                    value={select_by_day_Week}
                    onChangeHandle={handleChange}
                    Optiondata={["day", "week"]}
                  />
                </Box>

                <Box className={styles.sliders_wrp}>
                  <Slider {...settings} ref={slider}>
                    {trendingMovieAllData?.map((item, index) => (
                      <div>
                        <MovieCard item={item} />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>

        {/* React-BootStrap Used  for this app */}
        <Box className={styles.various_device}>
          <Container>
            <Row>
              <Col>
                <Box className={styles.headSec}>
                  <h4>
                    We Provide you streaming experience across various devices.
                  </h4>
                  <p>
                    With StreamVibe, you can enjoy your favorite movies and TV
                    shows anytime, anywhere. Our platform is designed to be
                    compatible with a wide range of devices, ensuring that you
                    never miss a moment of entertainment.
                  </p>
                </Box>
              </Col>
              <Box className={styles.various_box}>
                <Row>
                  {various_device.map((item) => {
                    return (
                      <>
                        <Col lg={4} md={6}>
                          <Box className={styles.v_box}>
                            <div className={styles.v1_box}>
                              <Image src={item.image} />
                              <h6>{item.title}</h6>
                            </div>
                            <p>{item.body}</p>
                          </Box>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Box>
            </Row>
          </Container>
        </Box>

        {/* accordion start */}

        <Box className={styles.accrodion_wrp}>
          <Container>
            <Row>
              <Col lg={8}>
                <Box className={styles.acc_sec}>
                  <h4>Frequently Asked Questions</h4>
                  <p>
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </Box>
              </Col>
              <Col lg={4}>
                <Box className={styles.acc_sec1}>
                  <button>Ask a Question</button>
                </Box>
              </Col>

              <Col lg={6}>
                    <div className={styles.accr_first_wrp}>
                        <div className={styles.scc_item}>
                          <h6>01</h6>
                        </div>
                        <div className={styles.accr_body}>
                          <div className={styles.accr_hdr}>
                          <h4>What is StreamVibe?</h4>
                          <div className={styles.accr_icon} onClick={()=>handleToggleAccordion(1)}>
                         { openIndex === 1 ? <><Image src={Down} alt="" /></>:<><Image src={Up} alt="" /></>}
                        </div>
                          </div>
                          <div> {openIndex ===1 && <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>}</div>
                        </div>
                       
                    </div>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;