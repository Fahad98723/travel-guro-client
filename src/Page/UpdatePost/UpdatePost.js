import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const UpdatePost = () => {
    const { id } = useParams();
    const { loading } = useAuth();
    const [blog, setBlog] = useState({});

    const [title, setTitle] = useState(blog.title);
    const [category, setCategory] = useState(blog.category);
    const [image, setImage] = useState(blog.image);

    const [cost, setCost] = useState(blog.cost);
    const [details, setDetails] = useState(blog.details);
    const [address, setAddress] = useState(blog.address);
    const [traveler, setTraveler] = useState(blog.traveler);
    const [rating, setRating] = useState(blog.rating);
    const [spentDay, setSpentDay] = useState(blog.spentDay);
    const [date, setDate] = useState(blog.date);



    const handleAddBlog = (e) => {
        e.preventDefault();
        const blog = { title, cost, details, date, category, rating, address, spentDay, traveler, image };
        axios.put(`https://stormy-sea-69201.herokuapp.com/blogs/update/${id}`, blog)
            .then(res => {
                if (res.data.matchedCount) {
                    e.target.value = '';
                    alert('Your blog has been Publish!')
                } else {
                    alert('Your blog cannot Publish due to some reason')
                }
            })
            .catch(error => {
                if (error.message) {
                    alert(error.message);
                }
            });

    }
    useEffect(() => {
        axios.get(`https://stormy-sea-69201.herokuapp.com/blogs/${id}`)
            .then(res => setBlog(res.data))
    }, [])
    if (loading) {
        return '';
    }

    return (
        <Container className='py-5'>
        <div className="heading mb-5">
            <h1 className=''>Edit The Blog Here </h1>
        </div>
        <Row>
            <Col lg='6'>

                <Form onSubmit={handleAddBlog}>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter Blog Title" required defaultValue={blog.title} />
                    </Form.Group>

                    <Form.Select onChange={e => setCategory(e.target.value)}  aria-label="Default select example" required>
                        <option>Select Travel Category</option>
                        <option value="Family">Family</option>
                        <option value="Single">Single</option>
                        <option value="Friends">Friends</option>
                    </Form.Select>
                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control onChange={e => setAddress(e.target.value)} defaultValue={blog.address} type="text" placeholder="Address  Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control type="date" name='date_of_birth' defaultValue={blog.date}  onChange={e => setDate(e.target.value)} required />
                        </Form.Group>
                    {/* <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Blog Thumbnail</Form.Label>
                        <Form.Control type="file" onChange={e => setThumb(e.target.files[0])} required />
                    </Form.Group> */}

                    

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control onChange={e => setImage(e.target.value)} defaultValue={blog.image} type="text" placeholder="Enter Image Link" required />
                    </Form.Group>
                    
                    {/* <input min='0' max='5' onBlur={handleOnBlur} type='number' className= 'py-1 mb-3 w-100' name="rating" step=".5" id="" placeholder='Rate Number' /> */}

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control min='0' max='5' onChange={e => setRating(e.target.value)} type="number" defaultValue={blog.rating}  step=".5" placeholder="Rating" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control onChange={e => setSpentDay(e.target.value)} defaultValue={blog.spentDay} type="number" placeholder="Enter Spent Days" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control onChange={e => setCost(e.target.value)} defaultValue={blog.cost} type="number" placeholder="Enter Travel Cost" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                        <Form.Control as="textarea" rows={3} placeholder='Travel Details' onChange={e => setDetails(e.target.value)} defaultValue={blog.details} required />
                    </Form.Group>

                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                
                        <Form.Control onChange={e => setTraveler(e.target.value)} defaultValue={blog.traveler} type="text" placeholder="Traveler  Name" required />
                    </Form.Group>
                    <button className='btn btn-danger' type='submit'>Update Blog</button>
                </Form>
            </Col>
            <Col lg='6'>
            {/* <img src={img} alt="" /> */}
            </Col>
        </Row>
    </Container>
    );
};

export default UpdatePost;