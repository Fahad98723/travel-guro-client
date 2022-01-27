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
                    <div className="heading mb-5">
                    <h2>Top Rated</h2>
                    </div>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default BlogsAndSidebar;