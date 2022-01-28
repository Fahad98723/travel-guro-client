import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    let {user,  isAdmin} = useAuth();
    let location = useLocation();

    if (!isAdmin) { return <Stack >
    <Spinner animation="border" className='mx-auto ' variant="danger" />
    </Stack> }
    if (user.email && isAdmin) {
      return children;
  }
  return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;
