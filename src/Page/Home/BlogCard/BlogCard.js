import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../../Images/banner/img (1).jpg'
import './BlogCard.css'
import Rating from 'react-rating';
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
        </div>
    );
};

export default BlogCard;