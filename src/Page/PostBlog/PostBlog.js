import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const PostBlog = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    // const [thumb, setThumb] = useState(null);
    const [cost, setCost] = useState('');
    const [details, setDetails] = useState('');
    const [address, setAddress] = useState('');
    const [traveler, setTraveler] = useState('');
    const [rating, setRating] = useState(0);
    const [spentDay, setSpentDay] = useState(0);
    const [date, setDate] = useState(0);



    const addCourseHandle = e => {
        e.preventDefault();
        
        const formData = {
            title, category, image, cost , details, address, traveler, rating, status : 'Approved', spentDay , date
        }

        console.log(formData);
        axios.post('http://localhost:5000/blogs', formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Course Added');
                    e.target.reset();
                    
                }
            });
            
    }
    return (
        <div>
            <Container className='py-5'>
            <div className="heading mb-5">
                <h1 className=''>Add New Blog Here </h1>
            </div>
            <Row>
                <Col lg='6'>

                    <Form onSubmit={addCourseHandle}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter Blog Title" required />
                        </Form.Group>

                        <Form.Select onChange={e => setCategory(e.target.value)} aria-label="Default select example" required>
                            <option>Select Travel Category</option>
                            <option value="Family">Family</option>
                            <option value="Single">Single</option>
                            <option value="Friends">Friends</option>
                        </Form.Select>
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control onChange={e => setAddress(e.target.value)} type="text" placeholder="Address  Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                        <Form.Control type="date" name='date_of_birth'  onChange={e => setDate(e.target.value)} required />
                        </Form.Group>

                        
                        {/* <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Blog Thumbnail</Form.Label>
                            <Form.Control type="file" onChange={e => setThumb(e.target.files[0])} required />
                        </Form.Group> */}

                        

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control onChange={e => setImage(e.target.value)} type="text" placeholder="Enter Image Link" required />
                        </Form.Group>
                        
                        {/* <input min='0' max='5' onBlur={handleOnBlur} type='number' className= 'py-1 mb-3 w-100' name="rating" step=".5" id="" placeholder='Rate Number' /> */}

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control min='0' max='5' onChange={e => setRating(e.target.value)} type="number"  step=".5" placeholder="Rating" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control onChange={e => setSpentDay(e.target.value)} type="number" placeholder="Enter Spent Days" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control onChange={e => setCost(e.target.value)} type="number" placeholder="Enter Travel Cost" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control as="textarea" rows={3} placeholder='Travel Details' onChange={e => setDetails(e.target.value)} required />
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                            <Form.Control onChange={e => setTraveler(e.target.value)} type="text" placeholder="Traveler  Name" required />
                        </Form.Group>
                        <Button type='submit'>Add Blog</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default PostBlog;