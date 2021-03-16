import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import React from "react";
import { LAUNCH_YEARS } from "../../constants/constants";
import { useFilter } from "./useFilterHook";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 550,
      width: 220,
    },
    button: {
      height: 25,
      width: 70,
      margin: 7,
    },
  })
);

export default function Filters() {
  const classes = useStyles();
  const {
    handleYearChange,
    handleLaunchChange,
    handleLandChange,
    launchYear,
    successfullLaunch,
    successfullLand,
  } = useFilter();

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <div className="FilterText">Filters</div>

          <Grid container spacing={2} className="LaunchYearContent">
            <div className="LaunchYear">Launch Year</div>
            {LAUNCH_YEARS.map((value) => (
              <ToggleButton
                value={value}
                className={classes.button}
                selected={launchYear === value}
                onChange={(e) => handleYearChange(e)}
              >
                {value}
              </ToggleButton>
            ))}
          </Grid>

          <Grid container spacing={2} className="SuccessfullLaunch">
            <div className="LaunchYear">Successfull Launch</div>
            {["TRUE", "FALSE"].map((value) => (
              <ToggleButton
                value={value}
                className={classes.button}
                selected={successfullLaunch === value.toLowerCase()}
                onChange={(e) => handleLaunchChange(e)}
              >
                {value}
              </ToggleButton>
            ))}
          </Grid>

          <Grid container spacing={2} className="SuccessfullLand">
            <div className="LaunchYear">Successfull Land</div>
            {["TRUE", "FALSE"].map((value) => (
              <ToggleButton
                value={value}
                className={classes.button}
                selected={successfullLand === value.toLowerCase()}
                onChange={(e) => handleLandChange(e)}
              >
                {value}
              </ToggleButton>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
