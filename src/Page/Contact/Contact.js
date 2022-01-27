import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

import img from '../../Images/footer/footer (6).jpg'
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
const Contact = () => {
    return (
        <div>
            <Navigation></Navigation>
            
            <div className="py-5">
            <Container>
                <div className="heading mb-5">
                    <h3>Contact With Us</h3>
                    <h1>We'll Love To Hear From You</h1>
                </div>
                <Row>
                    <Col lg='6'>
                        <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Control type="name" placeholder="Your name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
       
                        </Row>

                        <Form.Group as={Col} controlId="formGridPhone" className="mb-3">
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridSubejct">
                            <Form.Control placeholder="Your Subject" />
                        </Form.Group>                      
                        
                        <FloatingLabel controlId="floatingTextarea2" label="Meassage">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <button className="btn btn-dark">Submit</button>
                        </Form>
                    </Col>
                    <Col lg='6'>
                        <img src={img} alt="" className="img-fluid h-100" />
                    </Col>
                </Row>
            </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;