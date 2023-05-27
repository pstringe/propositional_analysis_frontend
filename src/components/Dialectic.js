import { Card, Box } from '@mui/material';

const cardStyles = {
    width: '100%',
    height: '50px',
};

const Dialectic = ({dialectic}) => {
    return ( 
        <Box style={cardStyles}>
            <Card >
                {dialectic.name}
            </Card>
        </Box>
    );
}

export default Dialectic;