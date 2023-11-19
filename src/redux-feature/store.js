import { configureStore } from "@reduxjs/toolkit";
import  AllTrendReducer  from "./Trending-Api/All";

export const store = configureStore({
  reducer: {
   trendAllData: AllTrendReducer
  },
});
