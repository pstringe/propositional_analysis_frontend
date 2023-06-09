/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, Box } from '@mui/material';
import { Proposition as IProposition } from '../types/interfaces';

const cardStyles = {
    width: '100%',
    height: '50px',
};

interface PropositionProps  {
    proposition: Partial<IProposition>;
}

const Proposition = ({proposition}: PropositionProps) => {
    return ( 
        <Box style={cardStyles}>
            <Card>
                {proposition.token}
            </Card>
        </Box>
    );
}

export default Proposition;