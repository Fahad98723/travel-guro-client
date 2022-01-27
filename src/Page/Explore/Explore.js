import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import BlogCard from '../Home/BlogCard/BlogCard';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [blog, setBlog] = useState([])
    const [value, setValue] = useState('All Blogs')
    useEffect(() => {
        fetch('https://stormy-sea-69201.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlog(data.blogs))
    },[])
    const allBlog = blog.filter(b => b.status === 'Approved')
    const highestPaid = allBlog.filter(b => b.cost >= 200)
    const topRated = allBlog.filter(b => parseFloat(b.rating) >= 4.5)

    console.log(highestPaid);
    return (
        <div>
            <Navigation></Navigation>
           <Container className='py-5'>
           <Dropdown className='mb-5'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {value}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() =>setValue('All Blogs')}>All Blog </Dropdown.Item>
                <Dropdown.Item onClick={() =>setValue('Highest Paid')} >Highest Cost</Dropdown.Item>
                <Dropdown.Item onClick={() =>setValue('Top Rated')}>Top Rated</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
               <Row>
                   <Col>
                   <Row className='g-3'>
                   {
                     value === 'Highest Paid' &&  highestPaid.map(blog => 
                        <Col lg='6'>
                       <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    <p>
                    {blog?.details.slice(0,100)}
                    </p>
                    <h5>Written By {blog?.traveler}</h5>
                    <h5>Ratings :  <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5>

                    </div>
                </Card.ImgOverlay>
                </Card>
                        </Col>
                       )
                   }
                   {
                     value === "All Blogs" &&  allBlog.map(blog => 
                        <Col lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <p>
                    {blog?.details.slice(0,100)}
                    </p>
                    <h5>Written By {blog?.traveler}</h5>
                    <h5>Ratings :  <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5>

                    </div>
                </Card.ImgOverlay>
                </Card>
                        </Col>
                       )
                   }
                   {
                     value === "Top Rated" &&  allBlog.map(blog => 
                        <Col lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <p>
                    {blog?.details.slice(0,100)}
                    </p>
                    <h5>Written By {blog?.traveler}</h5>
                    <h5>Ratings :  <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5>

                    </div>
                </Card.ImgOverlay>
                </Card>
                        </Col>
                       )
                   }
                   
                   </Row>
                   </Col>
               </Row>
            </Container> 
            <Footer></Footer>
        </div>
    );
};

export default Explore;