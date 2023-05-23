import { Card, Box } from '@mui/material';

const cardStyles = {
    width: '100%',
    height: '50px',
};

const Proposition = ({proposition}) => {
    return ( 
        <Box style={cardStyles}>
            <Card>
                {proposition.string}
            </Card>
        </Box>
    );
}

export default Proposition;