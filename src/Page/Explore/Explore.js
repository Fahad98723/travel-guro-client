import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../Home/BlogCard/BlogCard';
import Progress from '../Progress/Progress';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Explore.css'
const Explore = () => {
    const [blog, setBlog] = useState([])
    const [value, setValue] = useState('All Blogs')
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    useEffect(() => {
        // fetch(`https://travel-guro-server.onrender.com/blogs?page=${page}&&size=${size}`)
        fetch(`https://travel-guro-server.onrender.com/blogs`)
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
                     value === 'Highest Price' &&  highestPrice.sort((a, b) => b.cost - a.cost).map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                       <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'350px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='card-image ' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    

                    </div>
                </Card.ImgOverlay>
                <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'10px 0px' }}>
                    <Box sx={{ margin: 1 }}>
     
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>

                    <Box sx={{marginLeft:'10px'}}>
                    <small className='d-block'>Written By {blog.traveler}</small>
                    <small>Ratings :  <Rating className='text-warning m-0'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></small>
                    </Box>
                </Box>
                </Card>
                        </Col>
                       )
                   }
                   {
                       Object.keys(blog).length === 0 ? [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                      ].map((s) => <Col lg='6'>
                        <Progress></Progress>
                        </Col>)  :
                        <>
                        {
                     value === "All Blogs" &&  allBlog.map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'350px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='card-image ' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <p>
                    {blog?.details.slice(0,100)}
                    </p>

                    </div>
                </Card.ImgOverlay>
                <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'10px 0px' }}>
                    <Box sx={{ margin: 1 }}>
     
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>

                    <Box sx={{marginLeft:'10px'}}>
                    <small className='d-block'>Written By {blog.traveler}</small>
                    <small>Ratings :  <Rating className='text-warning m-0'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></small>
                    </Box>
                </Box>
                </Card>
                        </Col>
                       )
                   }
                        </> 
                   }
                   {
                     value === "Lowest Price" &&  lowestPrice.sort((a, b) => b.cost - a.cost).map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'350px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='card-image ' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    

                    </div>
                </Card.ImgOverlay>
                <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'10px 0px' }}>
                    <Box sx={{ margin: 1 }}>
     
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>

                    <Box sx={{marginLeft:'10px'}}>
                    <small className='d-block'>Written By {blog.traveler}</small>
                    <small>Ratings :  <Rating className='text-warning m-0'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></small>
                    </Box>
                </Box>
                </Card>
                        </Col>
                       ).reverse()
                   }
                   {
                     value === "Highest Rated" &&  topRated.sort((a, b) => b.rating - a.rating).map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'350px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='card-image ' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>


                    </div>
                </Card.ImgOverlay>
                <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'10px 0px' }}>
                    <Box sx={{ margin: 1 }}>
     
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>

                    <Box sx={{marginLeft:'10px'}}>
                    <small className='d-block'>Written By {blog.traveler}</small>
                    <small>Ratings :  <Rating className='text-warning m-0'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></small>
                    </Box>
                </Box>
                </Card>
                        </Col>
                       )
                   }
                   {
                     value === "Lowest Rated" &&  lowestRated.sort((a, b) => b.rating - a.rating).map(blog => 
                        <Col onClick={() => handleSingleBlog(blog._id)} lg='6'>
                        <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'350px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='card-image ' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <h3>Cost : ${blog?.cost}</h3>
                    
                    </div>
                </Card.ImgOverlay>
                <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'10px 0px' }}>
                    <Box sx={{ margin: 1 }}>
     
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>

                    <Box sx={{marginLeft:'10px'}}>
                    <small className='d-block'>Written By {blog.traveler}</small>
                    <small>Ratings :  <Rating className='text-warning m-0'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></small>
                    </Box>
                </Box>
                </Card>
                        </Col>
                       ).reverse()
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