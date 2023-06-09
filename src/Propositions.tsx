import { Proposition as IProposition } from './types/interfaces';
import Proposition from './components/Propostion';
import { TextField, Box } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROPOSITIONS_ROUTE, postFetch } from './utils/useFetch';

const headerStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
};

const Propositions = () => {
    const [propositions, setPropositions] = useState<Partial<IProposition>[]>([]);
    const [ input, setInput ] = useState('');
    const { dialectic_id } = useParams();

    const handleChange = (event: SyntheticEvent) => {
        console.log({event})
        //setInput(event.currentTarget.value);
    }
        
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const payload: Partial<IProposition> = { };

        postFetch(PROPOSITIONS_ROUTE, payload);
        setPropositions([
            ...propositions,
            payload
        ]);
        setInput('');
    }

    return (
        <Box maxWidth="sm">
            <Box style={headerStyles}>
                <Link to={'/dialectic'}>Back</Link>
            </Box>
            <h1>React App</h1>
            {propositions.map((proposition, idx) => {
                return <Proposition key={idx} proposition={proposition}/>
            })}
            <form onSubmit={(e) => handleSubmit}><TextField onChange={handleChange}/></form>
        </Box>
    )
}
 
export default Propositions;