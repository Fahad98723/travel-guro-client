import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    let {user, isLoading} = useAuth();
    let location = useLocation();
    if (isLoading) { return <Stack >
    <Spinner animation="border" className='mx-auto ' variant="danger" />
    </Stack> }
    if (!user.email) {
      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default PrivateRoute;