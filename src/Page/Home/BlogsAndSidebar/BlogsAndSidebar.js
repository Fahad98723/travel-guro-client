import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const BlogsAndSidebar = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col lg='8'>
                    <Blogs></Blogs>
                </Col>
                <Col lg='4' className='py-5'>
                    <div className="heading mb-3">
                    <h1>Top Rated</h1>
                    </div>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default BlogsAndSidebar;