import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScrollToTop from "react-scroll-up";
import NavTabs from "./NavTabs";

const defaultTheme = createTheme();

function App(props) {
  const classes = props.classes;
  return (
    <div>
      <NavTabs />
      <ScrollToTop showUnder={160}>
      <Button color="primary" className={classes.button}>
        <ArrowUpwardIcon/>
      </Button>
      </ScrollToTop>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(defaultTheme)(App);
