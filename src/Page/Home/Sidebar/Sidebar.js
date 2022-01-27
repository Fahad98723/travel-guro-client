import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';


const Sidebar = () => {
    const [blog, setBlog] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlog(data.blogs))
    },[])

    console.log(blog);
    const topRated = blog?.filter(b => parseFloat(b.rating) >= 5)
    return (
        <div style={{background:'#00203FFF'}}>
            
            {
                topRated?.map(top => <div  className='border'>
                <Row className='align-items-center gx-0 p-2 text-white' >
                    <Col xs='4'>
                        <img src={top.image} style={{borderRadius:'50%', height:'100px', width:'100px'}} className=' mx-auto'  alt="" />
                    </Col>
                    <Col xs='8'>
                        <h6>{top.title}</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                    </Col>
                </Row>
                </div>)
            }
           
        </div>
    );
};

export default Sidebar;