import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../Images/banner/img (3).jpg'
const WhyShouldTravel = () => {
    return (
        <div>
           <Container className='py-5'>
            <Row className='align-items-center'>
            <Col lg='6'>
                <img src={img2} className='img-fluid' alt="" />
            </Col>    
            <Col lg='6'>
                <h1>Why You Should Travel ?</h1>
                <p>Visiting a new place is a good way to look at your own life and see it from the other side, so to speak. Seeing places where people have different rights, different incomes, and different ideas will make you challenge your own experiences and opinions and help you appreciate the good in your life that it’s often so easy to take for granted.</p>
            </Col>    
            </Row>   
            </Container> 
        </div>
    );
};

export default WhyShouldTravel;