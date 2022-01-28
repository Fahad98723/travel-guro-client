import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'
import image from '../../../Images/footer/footer (1).jpg'
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user , isAdmin, logOut} = useAuth()
    console.log(isAdmin);
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" sticky= 'top' className='py-2 navigation bg-danger'>
        <Container>
        {
            user.email ? <img src={user?.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZrsHa4yTpOTalvfF-EnLhyxY59jKbMX8__sb2XJs5wW2fV_zDdEo0mJgGRTXlPbkR-Y&usqp=CAU"} className='rounded-circle me-2' height={50} width={50} alt="" /> : ''
        }
        <Navbar.Brand className='logo text-warning' as={Link} to="/home">Travel Guro</Navbar.Brand>
        <Navbar.Toggle className='' />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                 
                
                
                {
                    user?.email && isAdmin ?  <>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> 
                    </> : <Nav.Link as={Link} to="/addExperience">Add Experience</Nav.Link>
                }
                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Navbar.Text>
                {user?.email || user?.displayName ? <h6 className='mx-3 my-3 fw-bold name '><i  className="fas fa-user-check "></i> {user?.displayName}</h6> : ''}
             </Navbar.Text>
            {
                user?.email || user?.displayName ? 
                <button onClick={logOut} className="btn btn-warning fw-bolder">Logout</button> 
                :
                <Link className="btn btn-warning fw-bolder text-dark " to='/login'>Login</Link>
            }
                         
             </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;