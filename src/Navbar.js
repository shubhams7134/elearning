import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Link} from "react-router-dom";
import "./first.css";
import { scroller } from "react-scroll";
import { Nav, NavDropdown, Form,Button, FormControl, Navbar } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1200,
      delay: 100,
      smooth: true,
      offset: -90,
    });
  };
    
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <nav class="navbar navbar-expand-lg navbar-dark">

<a class="navbar-brand" href="">tindog</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">

  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="#footer">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#pricing">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#cta">Download</a>
    </li>
  </ul>

</div>
</nav> */}

<Navbar style={{zIndex:"+10",position:"absolute",top:"0",width:"100%",backgroundColor:'rgb(0,0,0,0.8)'}} sticky="top"  expand="lg">
  <Navbar.Brand style={{paddingRight:"20px"}} href="/"> <span className="mentor">Mentor</span> <span className="mate"> Mate</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/">Home</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/course">All Courses</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/course/development">Development</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/course/marketing">Marketing</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/course/design">Design</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/course/business">Business</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/course/music">Music</Nav.Link>
      {/* <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="#link">Login</Nav.Link>

      <a href="/signup">
        <button  class="butn warning">Signup</button>
        </a> */}

       
      
    </Nav>
    <a href="https://www.facebook.com/">
    <FacebookIcon style={{color:"#fff", width:"30px", height:"30px",marginRight:"15px"}}/>
    </a>
    <a href="https://www.instagram.com/">
    <InstagramIcon style={{color:"#fff", width:"30px", height:"30px",marginRight:"15px"}}/>
    </a>
    <a href="https://twitter.com/">
    <TwitterIcon style={{color:"#fff", width:"30px", height:"30px",marginRight:"15px"}}/>
    </a>
    <a href="https://www.youtube.com/">
    <YouTubeIcon style={{color:"#fff", width:"30px", height:"30px"}}/>
    </a>
    
  </Navbar.Collapse>

</Navbar>

    </div>
  );
}
