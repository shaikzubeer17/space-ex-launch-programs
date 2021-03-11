import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from "react";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 500,
      width: 220,
    },
  }),
);

export default function Filters() {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} >
      <Grid container justify="center" >
        <Paper className={classes.paper} />
      </Grid>
    </Grid>
  );
}
