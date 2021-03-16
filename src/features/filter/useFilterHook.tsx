import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { AppDispatch } from "../../app/store";
import {
  fetchLaunchFilter,
  setLaunchYear,
  setSuccessfullLand,
  setSuccessfullLaunch,
} from "./filterSlice";

export function useFilter() {
  const dispatch: AppDispatch = useDispatch();

  const launchYear = useSelector(
    (state: RootState) => state.filters.launchYear,
    shallowEqual
  );

  const successfullLaunch = useSelector(
    (state: RootState) => state.filters.successfullLaunch,
    shallowEqual
  );

  const successfullLand = useSelector(
    (state: RootState) => state.filters.successfullLand,
    shallowEqual
  );

  const processUrl = (year: any) => {
    let url = "";
    url =
      "&launch_success=" +
      true +
      "&land_success=" +
      true +
      "&launch_year=" +
      year;
    return url;
  };

  const handleYearChange = (e: any) => {
    dispatch(setLaunchYear(e.target.innerText));
    if (successfullLaunch !== null) {
      const url =
        "&launch_success=" +
        successfullLaunch +
        "&land_success=" +
        true +
        "&launch_year=" +
        e.target.innerText;
      dispatch(fetchLaunchFilter(url));
    } else if (successfullLand !== null) {
      const url =
        "&launch_success=" +
        true +
        "&land_success=" +
        successfullLand +
        "&launch_year=" +
        e.target.innerText;
      dispatch(fetchLaunchFilter(url));
    } else {
      dispatch(fetchLaunchFilter(processUrl(e.target.innerText)));
    }
  };

  const handleLaunchChange = (e: any) => {
    const val = e.target.innerText.toLowerCase();
    dispatch(setSuccessfullLaunch(val));

    if (launchYear) {
      const url =
        "&launch_success=" +
        val +
        "&land_success=" +
        successfullLand +
        "&launch_year=" +
        launchYear;
      dispatch(fetchLaunchFilter(url));
    } else {
      const url1 = "&launch_success=" + val;
      dispatch(fetchLaunchFilter(url1));
    }
  };

  const handleLandChange = (e: any) => {
    const val = e.target.innerText.toLowerCase();
    dispatch(setSuccessfullLand(val));

    if (launchYear && successfullLaunch) {
      const url =
        "&launch_success=" +
        successfullLaunch +
        "&land_success=" +
        val +
        "&launch_year=" +
        launchYear;
      dispatch(fetchLaunchFilter(url));
    } else {
      const url =
        "&launch_success=" +
        successfullLaunch +
        "&land_success=" +
        e.target.innerText.toLowerCase();
      dispatch(fetchLaunchFilter(url));
    }
  };

  return {
    handleYearChange,
    handleLaunchChange,
    handleLandChange,
    launchYear,
    successfullLaunch,
    successfullLand,
  };
}
