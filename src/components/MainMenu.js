import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import MainMenuButton from './MainMenuButton';

function MainMenu() {
  return (
      <Grid>
        <MainMenuButton link="/play" linkText="Play"/>
      </Grid>
  );
}

export default MainMenu;
