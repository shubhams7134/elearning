import React from "react";
import "./first.css";
import {Container,Row,Col} from "react-bootstrap";
import MediaCard from "./Categorycard";
export default function Second(){
    return(
        <>
        <h1 className="course" style={{marginTop:"80px"}}>Course Categories</h1>
        <br/>

        <Container>
            <Row>
                <Col  sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/course/development"><MediaCard  title="Development" URL="https://res.cloudinary.com/dmxitcrjx/image/upload/v1610393478/dev2_yt66cp.jpg" /></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/course/marketing"><MediaCard title="Marketing" URL="https://res.cloudinary.com/dmxitcrjx/image/upload/v1610393825/marr2_xif3ry.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/course/design"><MediaCard title="Design" URL="https://res.cloudinary.com/dmxitcrjx/image/upload/v1610393662/des1_qwmhmh.jpg"/></a> </Col>
               
           
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/course/business"><MediaCard title="Business" URL="https://res.cloudinary.com/dmxitcrjx/image/upload/v1610393995/cor2_m8aanx.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/course/music"><MediaCard title="Music" URL="https://res.cloudinary.com/dmxitcrjx/image/upload/v1610394178/mus2_vheegv.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/course/development"><MediaCard title="Development" URL="https://res.cloudinary.com/dmxitcrjx/image/upload/v1610393554/dev5_dkebrn.jpg"/></a></Col>
                
            </Row>
        </Container>
        </>
    )
}