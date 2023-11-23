// import { Inter } from 'next/font/google'

// import { Provider } from 'react-redux';
// import { store } from '@/redux-feature/store';
// const inter = Inter({ subsets: ['latin'] })

// // export const metadata = {
// //   title: 'Create Next App',
// //   description: 'Generated by create next app',
// // }

// export default function RootLayout({ children }) {
//   return (<Provider store={store}>{children}</Provider>
  
//   )
// }
"use client"
import { store } from "@/redux-feature/store"
import { Provider } from "react-redux"
import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/Layout/Navbar/Navbar";
import { CssBaseline, Toolbar } from "@mui/material";
// import 'bootstrap/dist/js/bootstrap.bundle';



function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
    <Navbar />
        <body >{children}</body>
      </ReduxProvider>
    </html>
  )
}
