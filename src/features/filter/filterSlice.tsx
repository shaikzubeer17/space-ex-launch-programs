import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchApi from "../../apiCall/fetchApi";
import { AppThunk } from "../../app/store";
import { FILTER_API } from "../../constants/urls";

export interface FilterState {
  launchYear: any;
  successfullLaunch: any;
  successfullLand: any;
  showSpinner: boolean;
  spaceXData: any
}

const initialState: FilterState = {
  launchYear: null,
  successfullLaunch: null,
  successfullLand: null,
  showSpinner: false,
  spaceXData: []
};

export const filters = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setLaunchYear(state, action: PayloadAction<any>) {
      state.launchYear = action.payload;
    },
    setSuccessfullLaunch(state, action: PayloadAction<any>) {
      state.successfullLaunch = action.payload;
    },
    setSuccessfullLand(state, action: PayloadAction<any>) {
      state.successfullLand = action.payload;
    },
    startSpinner(state) {
      state.showSpinner = true;
    },
    stopSpinner(state) {
      state.showSpinner = false;
    },
    setSpaceXData(state, action: PayloadAction<any>) {
        state.spaceXData = action.payload
    }
  },
});

export const {
  setLaunchYear,
  setSuccessfullLaunch,
  setSuccessfullLand,
  startSpinner,
  stopSpinner,
  setSpaceXData
} = filters.actions;

export default filters.reducer;

export const fetchLaunchFilter = (url: any): AppThunk => async (dispatch) => {
  try {
    dispatch(startSpinner());
    const response = await fetchApi(FILTER_API + url);
    dispatch(setSpaceXData(response));
    dispatch(stopSpinner());
  } catch (err) {
    console.log(err, dispatch);
    dispatch(stopSpinner());
  }
};

export const fetchLaunch = (): AppThunk => async (dispatch) => {
  try {
    dispatch(startSpinner());
    const response = await fetchApi(FILTER_API);
    dispatch(setSpaceXData(response));
    dispatch(stopSpinner());
  } catch (err) {
    console.log(err, dispatch);
    dispatch(stopSpinner());
  }
};
