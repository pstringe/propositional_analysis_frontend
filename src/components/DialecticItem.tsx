import React from 'react';
import { Card, Box } from '@mui/material';
import { Dialectic } from '../types/interfaces';

const cardStyles = {
    width: '100%',
    height: '50px',
};

interface DialecticProps extends Dialectic {
    key: number;
    dialectic: Dialectic;
}

const DialecticItem = ({key, dialectic}: Partial<DialecticProps>) => {
    return ( 
        <Box style={cardStyles}>
            <Card >
                {dialectic?.name}
            </Card>
        </Box>
    );
}

export default DialecticItem;