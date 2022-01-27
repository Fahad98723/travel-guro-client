import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const [blog, setBlog] = useState()
    useEffect(() => {
        fetch('https://stormy-sea-69201.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlog(data.blogs))
    },[])

    const navigate = useNavigate()
    const handleSingleBlog = (id) => {
        navigate(`/singleBlog/${id}`)
    }
    console.log(blog);
    const topRated = blog?.filter(b => parseFloat(b.rating) >= 5)
    return (
        <div style={{background:'#00203FFF'}}>
            
            {
                topRated?.map(top => <div style={{cursor : 'pointer'}} onClick={() => handleSingleBlog(top._id)}  className='border'>
                <Row className='align-items-center gx-0 p-2 text-white' >
                    <Col xs='4'>
                        <img src={top.image} style={{borderRadius:'50%', height:'100px', width:'100px'}} className=' mx-auto'  alt="" />
                    </Col>
                    <Col xs='8'>
                        <h6>{top.title}</h6>
                        <p>{top.traveler}
                        </p>
                        <h6>Rating :  <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={top.rating}
                    readonly
                    /></h6>
                    </Col>
                </Row>
                </div>)
            }
           
        </div>
    );
};

export default Sidebar;