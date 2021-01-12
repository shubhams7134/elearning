import React from "react";
import Menu from "./Navbar";
import "./first.css";
import girl from "./images/01.png"
import {Container,Row,Col} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import CountUp from "react-countup";

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { ImUsers, ImBooks,ImLaptop } from "react-icons/im";
import { GiGraduateCap } from "react-icons/gi";
export default function First(){
    return(
        <div style={{overflow:"hidden"}} >
    <Menu />
    
   <div>
   <Fade left>
      <div className="bigHeading">
          Select Your <br/>Course to Success
          <br/>
          <Button href="/course" style={{paddingTop:"12px",paddingBottom:'12px',marginLeft:"10px",color:"#fff"}} variant="contained" color="primary">
       Explore our courses
      </Button>
          
      </div>
    </Fade>
      
    <Fade top>
 
    <img className="slider-img" src={girl} alt="img"/>
    </Fade>

    </div>

    <div className="wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#add8e6" fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,58.7C640,53,800,107,960,138.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>

    
        <Container className="cardCont">
            <Row>
                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <ImUsers/>
                        <CountUp
                        start={0}
                        end={3045}
                        duration={2.5}
                        />
                        
                        
                        </Typography>
                        <div>Satisfied Students</div>
                    </CardContent>
                    
                    </Card>
                </Col>

                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <ImBooks/>
                        <CountUp
                        start={0}
                        end={25}
                        duration={2.5}
                        />
                        </Typography>
                        <div>Available Courses</div>
                    </CardContent>
                    
                    </Card>
                </Col>

                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <GiGraduateCap/>
                        <CountUp
                        start={0}
                        end={9862}
                        duration={2}
                        />
                        </Typography>
                        <div>Graduate Students</div>
                    </CardContent>
                    
                    </Card>
                </Col>

                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <ImLaptop/>
                        <CountUp
                        start={0}
                        end={25}
                        duration={2.5}
                        />
                        </Typography>
                        <div>Active Courses</div>
                    </CardContent>
                    
                    </Card>
                </Col>
            </Row>
        </Container>
        

    
    
        
        </div>
        
    )
}