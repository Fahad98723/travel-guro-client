import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../../Images/banner/img (1).jpg'
import './BlogCard.css'
import Rating from 'react-rating';
import { Avatar, Box } from '@mui/material';
import { padding } from '@mui/system';
const BlogCard = ({blog}) => {
    const navigate = useNavigate()
    const handleSingleBlog = () => {
        navigate(`/singleBlog/${blog._id}`)
    }
    return (
        <div>        
            <Card onClick={handleSingleBlog} className="bg-dark text-white blog-card" style={{cursor : 'pointer'}}>
                <Card.Img src={blog?.image} className='cardImg' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center '>
                    <div className='overlay'>
                    <h3>{blog?.title}</h3>
                    <p>
                    {blog?.details.slice(0,100)}
                    </p>
                    {/* <h5> {blog?.traveler}</h5> */}
                    {/* <h5>Ratings :  <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5> */}
                    
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
        </div>
    );
};

export default BlogCard;