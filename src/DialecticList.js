import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import Dialectic from './components/Dialectic';
import { useFetch, postFetch, DIALECTIC_ROUTE } from './utils/useFetch';
import { useNavigate } from 'react-router-dom';

const cardStyles = {
    width: '100%',
    height: '50px',
};

const DialecticList = ({dialecticList}) => {
    const navigate = useNavigate();
    const [newDialectic, setNewDialectic] = useState({});

    const handleClick = (e, idx) => {
        console.log(idx);
        navigate(`/propositions/${idx}`);
    }

    const handleSubmit = async (e, idx) => {
        console.log(idx);
        const res = await postFetch(DIALECTIC_ROUTE, {});
        console.log({res});
    }

    return (
        <Box sx={{
            height: '100%',
            margin: '1rem'
        }}>
            <h1>Dialectic</h1>
            {dialecticList?.map((dialectic, idx) => {
                console.log({idx})
                return (
                    <div styles={cardStyles} onClick={(e) => handleClick(e, idx)}>
                        <Dialectic  key={idx} dialectic={dialectic} />
                    </div>
                )
            })}
            <Button onClick={(e, idx) => handleSubmit(e, idx)}>New</Button>
        </Box>
    );
}
 
export default DialecticList;