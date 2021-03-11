import Grid from "@material-ui/core/Grid";
import React from "react";
import Filters from "../features/filter/filter";
import SpaceExPrograms from "../features/spaceEx/spaceExPrograms";
import "./App.css";

function App() {
  return (
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
          <SpaceExPrograms />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <footer className="Footer"><h4>Developed By: Shaik Zubeer </h4></footer>
      </Grid>
    </Grid>
  );
}

export default App;
