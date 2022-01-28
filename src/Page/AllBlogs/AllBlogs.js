import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllBlogs.css'
const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]) 

    //all bikes collect 
    useEffect(() => {
        fetch('https://stormy-sea-69201.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data.blogs))
    },[])
    
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to delete the product')
            if (confirm) {
                fetch(`https://stormy-sea-69201.herokuapp.com/blogs/${id}`, {
                method : "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("deleted successfully")
                    const remaining = blogs.filter(blog => blog._id !== id)
                    setBlogs(remaining)
                }
            })
        }
    }
    const handleUpdate = id => {
        const data = blogs.find(blog => blog._id === id)
        const dataUpdate = {...data}
        dataUpdate.status = 'Approved'
        axios.put(`https://stormy-sea-69201.herokuapp.com/blogs/${id}`,dataUpdate )
        
    }
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
                    <button onClick= {() => handleDelete(blog._id)} className="btn btn-danger me-3">Delete</button>

                    {
                        blog?.status === "Pending" ?<button className="btn btn-warning me-3">Pending</button> :  <button className="btn btn-success me-3">Approved</button>
                    }

                    <Link to={`/dashboard/edit/${blog?._id}`} className="btn btn-primary">Edit</Link>
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

export default AllBlogs;