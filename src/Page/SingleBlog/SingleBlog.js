import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img from '../../Images/banner/img (3).jpg'
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Rating from 'react-rating';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
const SingleBlog = () => {
    const {id} = useParams()
    const {user, isAdmin} = useAuth()
    const [blog, setBlog] = useState([])
    const [comment, setComment] = useState('')
    const [commented, setCommented] = useState(0)
    const [deleteCommented, setDeleteCommented] = useState(0)
    const [allComments, setAllComments] = useState([])
    useEffect(() => {
        fetch(`https://stormy-sea-69201.herokuapp.com/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[id])

    
    // const sBlog = blog.filter(b => b._id === id)
    // console.log(sBlog);

    const commentHandle = e => {       
        if (comment) {
            const data = {'comment' : comment , 'title' :  blog.title, 'author' : blog.traveler, 'blogId' : blog._id , 'commenter' : user.displayName, 'image' : user?.photoURL, 'email': user?.email }
            axios.post('https://stormy-sea-69201.herokuapp.com/blog/comments', data)
            .then(res => {
                if (res.data.insertedId) {
                    setCommented(commented + 1)
                    e.target.reset()
                }
            })
            
        }
        else{
            return
        }
        e.preventDefault()
        console.log(comment);
    }

    useEffect(() => {
        fetch('https://stormy-sea-69201.herokuapp.com/blog/comments')
        .then(res => res.json())
        .then(data => {
            setAllComments(data)       
        })
    },[commented,deleteCommented])

    const blogComments = allComments?.filter(b => b?.blogId === blog?._id)

    console.log(blogComments);

    const deleteComment = id => {
        axios.delete(`https://stormy-sea-69201.herokuapp.com/blog/comments/${id}`)
        .then(res => {
            if (res.data.deletedCount) {
                setDeleteCommented(deleteCommented + 1)
            }
        })
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container className='py-5'>
            <Row>
                <Col lg='8'>
                <h1 className='mb-3'>{blog?.title}</h1>
                <img src={blog?.image} style={{height:'500px', width:'100%' }} className='img-fluid' alt="" />
                <div className="details mt-3"> 
                <h4>{blog?.address}</h4>
                <h3>Author : {blog?.traveler}</h3>
                <p>{blog?.details}</p>  


                <h5>Expense : ${blog?.cost}</h5>
                <h5>Category : {blog?.category}</h5>
                <h5>Date : {blog?.date}</h5>
                <h5>Spent : {blog?.spentDay} Days</h5>
                <h5>Ratings : <Rating className='text-warning'
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={blog?.rating}
                    readonly
                    /></h5>
                </div>
               <div className="p-3 mt-5 shadow">
                   {
                       blogComments.slice(0,5)?.map( b => <div className="comments my-2 w-50">
                        <div className='d-flex align-items-center text-dark' >
                        <div>
                            <img src={b?.image ? b?.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZrsHa4yTpOTalvfF-EnLhyxY59jKbMX8__sb2XJs5wW2fV_zDdEo0mJgGRTXlPbkR-Y&usqp=CAU"} style={{borderRadius:'50%', height:'60px', width:'60px'}} className=' me-3'  alt="" />
                        </div>
                        <div >
                            <h6 className='fw-bold' style={{fontSize:'14px'}}>{b.commenter}</h6>
                            <p style={{fontSize:'14px'}}>{b.comment}
                            </p>
                            {
                                b.email === user?.email || isAdmin ?  <p onClick={() => deleteComment(b._id)} className='fw-bold text-danger' style={{fontSize:'14px',cursor:'pointer'}}>Delete 
                                </p> : ''
                            }
                        </div>
                    </div>
                       </div>)
                   }
               <Form className='mt-3' onSubmit={commentHandle}>
                {/* <Form.Label>Leave Your Comment Here</Form.Label> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">         
                <Form.Control as="textarea" onChange={e => setComment(e.target.value)} rows={3} placeholder='Leave Your Comment Here' required />
                </Form.Group>
                <button disabled={!user?.email} className='btn btn-success' type='submit'>Comment</button>
                </Form>
               </div>
                </Col>
                <Col lg='4'>
                    <div className="heading mb-3">
                        <h2>Top Rated</h2>
                    </div>
                 <Sidebar></Sidebar>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleBlog;