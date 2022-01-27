import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img from '../../Images/banner/img (3).jpg'
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Rating from 'react-rating';
const SingleBlog = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[id])

    // const sBlog = blog.filter(b => b._id === id)
    // console.log(sBlog);
    return (
        <div>
            <Navigation></Navigation>
            <Container className='py-5'>
            <Row>
                <Col lg='8'>
                <h1 className='mb-3'>{blog?.title}</h1>
                <img src={blog?.image} style={{height:'500px', width:'100%' }} className='img-fluid' alt="" />
                <div className="details mt-3"> 
                <h4>{blog?.address}</h4>
                <h3>Author : {blog?.traveler}</h3>
                <p>{blog?.details}</p>  


                <h5>Expense : ${blog?.cost}</h5>
                <h5>Date : 2022-01-17</h5>
                <h5>Spent : {blog?.spentDay} Days</h5>
                <h5>Ratings : <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5>
                </div>
                </Col>
                <Col lg='4'>
                    <div className="heading mb-3">
                        <h2>Top Rated</h2>
                    </div>
                 <Sidebar></Sidebar>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleBlog;