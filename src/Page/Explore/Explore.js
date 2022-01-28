import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../Home/BlogCard/BlogCard';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [blog, setBlog] = useState([])
    const [value, setValue] = useState('All Blogs')
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    useEffect(() => {
        // fetch(`https://stormy-sea-69201.herokuapp.com/blogs?page=${page}&&size=${size}`)
        fetch(`https://stormy-sea-69201.herokuapp.com/blogs`)
        .then(res => res.json())
        .then(data => {
            setBlog(data.blogs)
            const count = data.count
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        })
    },[page])

    const allBlog = blog.filter(b => b.status === 'Approved')

    const highestPrice = allBlog.filter(b => b.cost >= 200)
    const lowestPrice = allBlog.filter(b => b.cost < 200)
    const topRated = allBlog.filter(b => parseFloat(b.rating) >= 4.5)
    const lowestRated = allBlog.filter(b => parseFloat(b.rating) < 4.5)

    const navigate = useNavigate()
    const handleSingleBlog = (id) => {
        navigate(`/singleBlog/${id}`)
    }
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
                <Dropdown.Item onClick={() =>setValue('Highest Price')} >Highest Price</Dropdown.Item>
                <Dropdown.Item onClick={() =>setValue('Lowest Price')}>Lowest Price</Dropdown.Item>
                <Dropdown.Item onClick={() =>setValue('Highest Rated')} >Highest Rated</Dropdown.Item>
                <Dropdown.Item onClick={() =>setValue('Lowest Rated')}>Lowest Rated</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
               <Row>
                   <Col>
                   <Row className='g-3'>
                   {
                     value === 'Highest Price' &&  highestPrice.map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                       <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    
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
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
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
                     value === "Lowest Price" &&  lowestPrice.map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    
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
                     value === "Highest Rated" &&  topRated.map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    
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
                     value === "Lowest Rated" &&  lowestRated.map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    
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
                   {/* <div className="pagination mt-3">
                
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={number === page ? 'selected me-2 btn btn-danger' : 'me-2 btn btn-primary'}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
                </div> */}
                   </Row>
                   </Col>
               </Row>
               
            </Container> 
            <Footer></Footer>
        </div>
    );
};

export default Explore;