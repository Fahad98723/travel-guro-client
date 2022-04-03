import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SidebarProgress = () => {
    return (
        <div>
            <Card style={{backgroundColor: 'aliceblue'}}>
            <Row className='align-items-center gx-0 p-2' >
            <Col xs='4'>
                 <Skeleton variant="circular" height={100} width={100}/>
                </Col>
                <Col xs='8'>
                <Box sx={{ width: '100%', marginLeft:'5px' }}>
                    <Box sx={{ width: '60%' }}>
                        <Skeleton width="100%">
                        <Typography>.</Typography>
                        </Skeleton>
                    </Box>
                    <Box sx={{ width: '40%' }}>
                        <Skeleton width="100%">
                        <Typography>.</Typography>
                        </Skeleton>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Skeleton width="100%">
                        <Typography>.</Typography>
                        </Skeleton>
                    </Box>
                </Box>
                </Col>
                </Row>
                </Card>              
        </div>
    );
};

export default SidebarProgress;