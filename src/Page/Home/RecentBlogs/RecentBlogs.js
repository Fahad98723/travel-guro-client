import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import RecentBlogProgress from './RecentBlogProgress';
import './RecentBlogs.css'
const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('https://travel-guro-server.onrender.com/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data.blogs)
            setBlog(blogs.filter(b => b.status === "Approved"))
        })
    },[blogs])



    let recentBlog = [];
    for(let i = blog.length -1; i >= 0; i--) {
    recentBlog.push(blog[i]);
    }
    console.log(recentBlog);
    const navigate = useNavigate()
    const handleSingleBlog = (id) => {
        navigate(`/singleBlog/${id}`)
    }
    return (
        <div className="recentBlogs">
        <div  className='py-5 container '>
        <Row style={{paddingBottom:'100px'}}>
            <Col lg='6'>
            <div className="heading mb-2">
            <h1>Recent Blogs</h1>
            <h3>You Can <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Write Blogs', 'Read Blogs', 'Gain Knowledge About Places']}
            loop={0}
            cursor
            cursorStyle='💬'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </span></h3>
            
            </div>
            {
                 Object.keys(blog).length === 0 ? <RecentBlogProgress height={370}></RecentBlogProgress> 
                 : <>{
                    recentBlog.map(blog => <Card onClick={() => handleSingleBlog(blog._id)}  className="bg-dark text-white blog-card" style={{cursor : 'pointer', height:'auto'}}>
                    <Card.Img src={blog?.image} style={{ height:'370px'}} className='cardImg' alt="Card image" />
                    <Card.ImgOverlay className='d-flex align-items-center '>
                        <div className='overlay'>
                        <h4>{blog?.title}</h4>
                        <small>
                        {blog?.details.slice(0,400)}
                        </small>
                        {/* <h5> {blog?.traveler}</h5> */}
                        {/* <h5>Ratings :  <Rating className='text-warning'
                        emptySymbol="fa fa-star-o "
                        fullSymbol="fa fa-star "
                        initialRating={blog?.rating}
                        readonly
                        /></h5> */}
                        
                        </div>
                    </Card.ImgOverlay>
                    <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'5px 0px' }}>
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
                    </Card>).slice(0,1)
                }
                </>
            }
            

  
            </Col>
            <Col lg='6'>
            <Row className='gy-3'>
                <Col lg='12'>
                    {
                        Object.keys(blog).length === 0 ? <RecentBlogProgress height={200}></RecentBlogProgress> 
                        : <>
                        {
                recentBlog.map(blog => <Card onClick={() => handleSingleBlog(blog._id)}  className="bg-dark text-white blog-card" style={{cursor : 'pointer', height:'100%'}}>
                <Card.Img src={blog?.image} style={{ height:'200px'}} className='cardImg' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center '>
                    <div className='overlay'>
                    <h4>{blog?.title}</h4>
                    {/* <small>
                    {blog?.details.slice(0,100)}
                    </small> */}
                    {/* <h5> {blog?.traveler}</h5> */}
                    {/* <h5>Ratings :  <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5> */}
                    
                    </div>
                </Card.ImgOverlay>
                <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'5px 0px' }}>
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
                </Card>).slice(1,2)
            }
                        </>
                    }
                
                </Col>
                <Col lg='12'>
                    {
                        Object.keys(blog).length === 0 ? <RecentBlogProgress height={200}></RecentBlogProgress> 
                        : <> {
                            recentBlog.map(blog => <Card onClick={() => handleSingleBlog(blog._id)}  className="bg-dark text-white blog-card" style={{cursor : 'pointer', height:'100%'}}>
                            <Card.Img src={blog?.image} style={{ height:'200px'}} className='cardImg' alt="Card image" />
                            <Card.ImgOverlay className='d-flex align-items-center '>
                                <div className='overlay'>
                                <h4>{blog?.title}</h4>
                                {/* <small>
                                {blog?.details.slice(0,100)}
                                </small> */}
                                {/* <h5> {blog?.traveler}</h5> */}
                                {/* <h5>Ratings :  <Rating className='text-warning'
                                emptySymbol="fa fa-star-o "
                                fullSymbol="fa fa-star "
                                initialRating={blog?.rating}
                                readonly
                                /></h5> */}
                                
                                </div>
                            </Card.ImgOverlay>
                            <Box sx={{ display: 'flex', alignItems: 'center'  , padding:'5px 0px' }}>
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
                            </Card>).slice(2,3)
                        } </>
                    }
                
                </Col>
            </Row>
            </Col>
        </Row>
        </div>
        </div>
        
    );
};

export default RecentBlogs;