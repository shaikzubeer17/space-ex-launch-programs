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
      height: 300,
      width: 220,
    },
  }),
);

export default function SpaceExPrograms() {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} >
        <Grid container justify="center" spacing={3}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
