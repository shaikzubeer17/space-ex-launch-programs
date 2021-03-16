import {
  CircularProgress, createStyles, makeStyles,
  Theme
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useSelector } from "react-redux";
import SpaceXPrograms from "../features/content/spaceXPrograms";
import Filters from "../features/filter/filter";
import "./App.css";
import { RootState } from "./rootReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 101,
    },
  })
);

function App() {
  const showProgress = useSelector((state: RootState) => {
    return state.filters.showSpinner ? state.filters.showSpinner : false;
  });
  const classes = useStyles();

  return (
    <>
      <Backdrop className={classes.backdrop} open={showProgress}>
        <CircularProgress />
      </Backdrop>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <header className="Header">
            <h1>SpaceX Launch Program</h1>
          </header>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Filters />
          </Grid>
          <Grid item xs={12} sm={9}>
            <SpaceXPrograms />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12}>
          <footer className="Footer">
            <h4>Developed By: Shaik Zubeer </h4>
          </footer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
