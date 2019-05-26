import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import '../App.css';

const MainMenuButton = (props) => {
    return <Button variant="contained" color="primary">
          <Link className="MainMenuButton" to={props.link}>{props.linkText}</Link>
        </Button>;
}

export default MainMenuButton;