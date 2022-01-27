import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setAllBlogs(data.blogs)
            const count = data.count
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
            
        })
    },[page])
    const blogs = allBlogs.filter(b => b.status === "Approved")
    return (
            <div className='py-5'>
                <div className="heading mb-5">
                    <h1>Our Blogs</h1>
                </div>
            <Row className='gy-4'>
                {
                    blogs.map( blog => <Col lg='6'>
                    <BlogCard blog={blog}></BlogCard>
                </Col>)
                }
            </Row>
            <div className="pagination mt-3">
                
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected me-2 btn btn-danger' : 'me-2 btn btn-primary'}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
            </div>
        </div>
    );
};

export default Blogs;