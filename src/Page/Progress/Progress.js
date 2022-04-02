import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';

const Progress = () => {
    return (
        <div>
            <Card  className="" >
            <Stack spacing={1}>
            <Skeleton variant="rectangular" height={350} className='cardImg'/>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ margin: 1 }}>
                <Skeleton variant="circular">
                <Avatar />
                </Skeleton>
            </Box>
            <Box sx={{ width: '100%' }}>
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
            </Box>
        </Box>
            </Stack>
            </Card>
            

        </div>
    );
};

export default Progress;