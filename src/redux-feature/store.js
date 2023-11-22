import { configureStore } from "@reduxjs/toolkit";
import  AllTrendReducer  from "./Trending-Api/Trending_day_by_week_slice";

export const store = configureStore({
  reducer: {
   trendAllData: AllTrendReducer
  },
});
