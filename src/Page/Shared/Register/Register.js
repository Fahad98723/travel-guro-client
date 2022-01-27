import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link,useNavigate, useLocation} from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Navigation from '../Navigation/Navigation';
import './Register.css'
const Register = () => {
    const {googleSignIn,error,signupWithEmailAndPass,saveUser,setError} = useFirebase()
    const location = useLocation()
    const history = useNavigate()
    const uri = location?.state?.from?.pathname;
    const [user, setUser] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value

        const userDetails = {...user}
        userDetails[field] = value
        setUser(userDetails)
    }
    const email = user?.email
    const password = user?.password
    const name = user?.name 
    
    //googelsigin
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const user = result.user
            saveUser(user.email, user.displayName, "PUT")
            if (uri) {
                history(uri)  
            }
            else{
                history('/')
            }
        })
        .catch(error => {
            setError(error.message)
        })
    }
    //user signup
    const formHandle = e => {
        e.preventDefault()
        signupWithEmailAndPass(email, password, name, history)
    }

    return (
        <div>
            <Navigation/>
            <Container className= 'text-center py-5'>
                <div className="heading mb-5">
                    <h3>If You Are New User Here Then Please</h3>
                    <h1>Create An Account</h1>
                </div>
            <form onSubmit= {formHandle}>
                <input onBlur={handleOnBlur} className= 'py-1 mb-3' type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input onBlur={handleOnBlur} className= 'py-1 mb-3' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input onBlur={handleOnBlur} className= 'py-1 mb-3' type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input className='btn btn-warning mb-3 fw-bolder' type="submit" value="Sign up" />
                <br />
            </form>
            <h5 className='text-danger my-1'>{error}</h5>
            <h6 className=' mb-2'>Already have an account ? <Link to='/login'>Login</Link></h6>
            <i onClick = {handleGoogleLogin} className="fab fa-google fs-4"></i>
            </Container>
        </div>
    );
};

export default Register;