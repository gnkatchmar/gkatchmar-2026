/* import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";
import Bella from "./Bella";
import Gaming from "./Gaming";
import DVDs from "./DVDs";
import Music from "./Music";

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>;
}

const navigate = useNavigate(); // Replaces history.push()
const location = useLocation(); // Replaces props.location
const params = useParams();     // Replaces props.match.params

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: "/",
  };

  componentDidMount() {
    window.onpopstate = ()=> {
      this.setState({
        value: this.props.history.location.pathname
      });
  }
}

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.navigate(value);
  };
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
        >
            <Tab label="Home" value = "/" />
            <Tab label="Portfolio" value = "/portfolio"/>
            <Tab label="Our Pets" value = "/bella"/>
            <Tab label="Our Tabletop Games" value = "/gaming"/>
            <Tab label="Our DVDs & Blu-Rays" value = "/DVDs"/>
            <Tab label="Music Collection" value = "/Music"/>                        
            <Tab label="Dining Guides" value = "/dining"/>
            <Tab label="Restaurant Guide/Graveyard" value = "/restaurants"/>
            <Tab label="Cocktail Guides" value = "/cocktails"/>
          </Tabs>
        </AppBar>
        {value === "/" && <TabContainer>{<Home />}</TabContainer>}
        {value === "/portfolio" && <TabContainer>{<Portfolio />}</TabContainer>}
        {value === "/bella" && <TabContainer>{<Bella />}</TabContainer>}
        {value === "/gaming" && <TabContainer>{<Gaming />}</TabContainer>}
        {value === "/DVDs" && <TabContainer>{<DVDs />}</TabContainer>}
        {value === "/Music" && <TabContainer>{<Music />}</TabContainer>}
        {value === "/dining" && <TabContainer>{<Dining />}</TabContainer>}
        {value === "/restaurants" && <TabContainer>{<Restaurants />}</TabContainer>}
        {value === "/cocktails" && <TabContainer>{<Cocktail />}</TabContainer>}
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavTabs)); */