import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { AppDispatch } from "../../app/store";
import { fetchLaunch } from "../filter/filterSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 330,
      width: 220,
    },
  })
);

export default function SpaceXPrograms() {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchLaunch())
  }, [dispatch])

  const spaceXData = useSelector(
    (state: RootState) => state.filters.spaceXData,
    shallowEqual
  );

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center" spacing={3}>
        {spaceXData.map((card: any) => (
          <Grid key={card.launch_date_unix} item>
            <Paper className={classes.paper}>
              <CardActionArea>
                <CardContent>
                  <CardMedia
                    component="img"
                    alt="img"
                    height="140"
                    image={card.links.mission_patch_small}
                    title={card.mission_name}
                  />
                  <Typography gutterBottom variant="h6">
                    {card.mission_name}
                  </Typography>
                  <p>
                    <b>Mission Ids:</b>
                  </p>
                  <ul>
                    {card.mission_id.map((val: any) => {
                      return <li>{val}</li>;
                    })}
                  </ul>
                  <p>
                    <b>Launch Year:</b>
                    {card.launch_year}
                  </p>
                  <p>
                    <b>Successful Launch:</b>
                    {card.launch_success}
                  </p>
                  {/* <p><b>Successful Land:</b>{card.launch_landing}</p> */}
                </CardContent>
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
