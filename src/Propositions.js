import { TextField, Box } from '@mui/material';
import Proposition from './components/Propostion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
};
const Propositions = () => {
    const [propositions, setPropositions] = useState([]);
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        console.log('change', {event});
        setInput(event.target.value);
    }
        
    const handleSubmit = (event) => {
        console.log('submit', {input});
        event.preventDefault();
        setPropositions([...propositions, {id: propositions.length, string: input}]);
        setInput('');
    }

    return (
        <Box maxWidth="sm">
            <Box style={headerStyles}>
            <Link to={'/dialectic'}>Back</Link>
            </Box>
            <h1>React App</h1>
            {propositions.map((proposition, idx) => <Proposition key={idx} proposition={proposition}/>)}
            <form onSubmit={handleSubmit}><TextField onChange={handleChange}/></form>
        </Box>
    )
}
 
export default Propositions;