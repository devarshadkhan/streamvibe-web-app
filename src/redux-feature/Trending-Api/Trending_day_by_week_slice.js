// import { API } from "@/utils/axios/ApiEndPoints";
// import axiosInstance from "@/utils/axios/AxiosInstance";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     data:[],
//     loading: false,
//     isSuccess: false,
//   };


//   export const trendind_all = createAsyncThunk(
//     "tranding/All",
//     async (params, { rejectWithValue }) => {
//       try {
//         const response = await axiosInstance 
//           .get(API.allTre)
//           .then((data)=>{
//             console.log("DATADATA",data);
//           });
//         return response.data;
//       } catch (error) {
//        console.log(error);
//         return rejectWithValue(error.message);
//       }
//     }
//   );
  

//   export const AllTrendSlice = createSlice({
//     name: "tranding/All",
//     initialState,
//     reducers: {
//         AllTrend: (state, { payload, type }) => {
//             state = { ...state.data, payload };
//           },
//     },
//     extraReducers: {
//       [trendind_all.pending]: (state) => {
//         state.loading = true;
//       },
//       [trendind_all.fulfilled]: (state, { payload }) => {
//         state.loading = false;
//         state.isSuccess = true;
//         state.data = payload;
//       },
//       [trendind_all.rejected]: (state, { payload }) => {
//         state.loading = false;
//         state.isSuccess = false;
//         state.errorMessage = payload;
//       },
//     },
//   });
  
//   export const { AllTrend } = AllTrendSlice.actions;
//   export default AllTrendSlice.reducer;


import { API } from "@/utils/axios/ApiEndPoints";
import axiosInstance from "@/utils/axios/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  isSuccess: false,
  errorMessage: null,
  selectedOptionEndPoint:"day"
};

export const trendind_all = createAsyncThunk(
  "tranding/All",
  async (params, {getState, rejectWithValue }) => {
    try {
      const selectedOptionEndPoint = getState().trendAllData.selectedOptionEndPoint;
      const response = await axiosInstance.get(`trending/all/${selectedOptionEndPoint}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const AllTrendSlice = createSlice({
  name: "tranding/All",
  initialState,
  reducers: {
    AllTrend: (state, action) => {
      state.data = action.payload;
    },
    trendAllData_day_by_Week:(state,action)=>{
      state.selectedOptionEndPoint = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(trendind_all.pending, (state) => {
        state.loading = true;
      })
      .addCase(trendind_all.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(trendind_all.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export const { AllTrend, trendAllData_day_by_Week } = AllTrendSlice.actions;
export default AllTrendSlice.reducer;