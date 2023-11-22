import Navbar from "@/Layout/Navbar/Navbar";
import banner from "../assets/images/main-banner-center-home.png"
import Image from "next/image";
import { CssBaseline, Toolbar } from "@mui/material";
import HomePage from "./Home/HomePage";
export default function Home() {
  return (
   <>
    <CssBaseline />
    <Toolbar />
   <Navbar />
   <HomePage />
   {/* <Image src={banner}  style={{position:"absolute",top:"0",height:"auto"}}/> */}
   </>
  )
}
