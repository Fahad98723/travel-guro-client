import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import BlogsAndSidebar from '../BlogsAndSidebar/BlogsAndSidebar';
import WhyShouldTravel from '../WhyShouldTravel/WhyShouldTravel';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <WhyShouldTravel></WhyShouldTravel>
            <BlogsAndSidebar></BlogsAndSidebar>
            <Footer></Footer>
        </div>
    );
};

export default Home;