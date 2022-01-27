import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Dashboard.css'
const Dashboard = () => {
    const {logOut, user} = useFirebase()
    return (
        <div>
            <Container>
            {/* style={{background : '#d1e8e2'}} */}
                <Row>
                    <Col className='bg-danger py-5'  lg={3} sm={12}>
                    <div className="heading mt-5 text-center">
                        <h1 className='my-2 text-white'>DashBoard</h1>
                    </div>
                    
                        <ul className='dashboard-navbar'>
                        <h6 className=' my-3 fw-bold text-white border-1 '>{
            user.email ? <img src={user?.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZrsHa4yTpOTalvfF-EnLhyxY59jKbMX8__sb2XJs5wW2fV_zDdEo0mJgGRTXlPbkR-Y&usqp=CAU"} className='rounded-circle me-3' height={50} width={50} alt="" /> : ''
        } {user?.displayName}</h6>
                                    <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
                                    <i className="fas fa-home me-2 fs-4"></i>
                                    <Link className='text-white' to={`/`}>Home</Link>
                                    </button>
                                    <br />
                     
                            
                                <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
                                <i className="far fa-plus-square me-2 fs-4"></i>
                                    <Link className='text-white' to={`/dashboard/postBlog`}>Add Post</Link>
                                </button>
                                <br />
                                <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
                                <i className="fas fa-edit me-2 fs-4"></i>
                                    <Link className='text-white' to={`/dashboard/userBlogs`}>User Blogs</Link>
                                </button>

                                <br />

                                <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
                                <i className="fas fa-users-cog me-2 fs-4"></i>
                                    <Link className='text-white' to={`/dashboard/makeAdmin`}>Make Admin</Link>
                                </button>

                                <br />

                                <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
                                <i className="fas fa-cogs me-2 fs-4"></i>
                                    <Link className='text-white' to={`/dashboard`}>Manage All Blogs</Link>
                                </button>
                            <br />
                                    <button style={{fontSize : '20px'}} onClick= {logOut} className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
                                    <i class="fas fa-sign-out-alt me-2 fs-4"></i>
                                    Log Out
                                    </button>
                        </ul>  
                        </Col>    
                        <Col className='py-5' lg='9' sm='12'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;