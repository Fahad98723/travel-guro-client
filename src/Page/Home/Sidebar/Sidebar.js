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
        <><div style={{background:'#00203FFF'}}>
            
        {
            topRated?.slice(0,10).map(top => <div style={{cursor : 'pointer'}} onClick={() => handleSingleBlog(top._id)}  className='border'>
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
    <h3 className='mt-3'>Find Us On Social Sites</h3>
    <a target='blank' href='https://www.linkedin.com/in/kazi-fahad-221a91211/' className="social"><i style={{ color: '#007bb6' }} className=" me-2 fs-1 fab fa-linkedin"></i></a>
    <a target='blank' href='https://twitter.com/Mdravi88' className="social"><i style={{ color: '#00aced' }} className=" me-2 fs-1 fab fa-twitter-square"></i></a>
    <a target='blank' href='https://github.com/Fahad98723' className="social"><i style={{ color: 'black' }} className=" me-2 fs-1 fab fa-github-square"></i></a>
    <a target='blank' href='https://www.facebook.com/profile.php?id=100007037043156' className="social"><i style={{ color: '#0f90f3' }} className=" me-2 fs-1 fab fa-facebook-square"></i></a></>
    );
};

export default Sidebar;