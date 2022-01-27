import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const UsersBlog = () => {
    const [allBlogs, setAllBlogs] = useState([]) 
    const [update, setUpdate] = useState(0)
    //all bikes collect 
    

    const handleUpdate = id => {
        const data = blogs.find(blog => blog._id === id)
        const dataUpdate = {...data}
        dataUpdate.status = 'Approved'
        axios.put(`http://localhost:5000/blogs/${id}`,dataUpdate ) 
        .then(res => {
            if (res.data.modifiedCount) {
                setUpdate(update + 1)
            }
        })
            
    }

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setAllBlogs(data.blogs))
    },[update])
    

    const blogs = allBlogs.filter(all => all.status === 'Pending')
    console.log(blogs);
    return (
        <div>
        <Container>
        <div className="heading mb-5">
                <h3>Remove Those Blogs Which Are Not Good</h3>
                <h1>Blogs Managing</h1>
            </div>
            <Row className ='gy-5'>
                    {
                    blogs.map(blog => <Col lg='6'  sm='12'>
                    <div>
                    <Card  className="bg-dark text-white" style={{cursor : 'pointer', height:'300px'}}>
                <Card.Img src={blog.image} style={{opacity: '0.5'}} className='cardImg h-100' alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <div className='p-2'>
                    <h3>{blog?.title}</h3>
                    <p>
                    {blog?.details.slice(0,100)}
                    </p>
                    <h5>Written By {blog?.traveler}</h5>
                    
                    <button className="btn btn-warning me-3" disabled>Pending</button>
                    

                    <button onClick= {() => handleUpdate(blog._id)} className="btn btn-success">Approved Now</button>
                    </div>
                </Card.ImgOverlay>
                </Card>
                    </div>
                </Col>)
                    }
            </Row>
        </Container>
    </div>
    );
};

export default UsersBlog;