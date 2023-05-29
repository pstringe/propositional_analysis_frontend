import {useState } from 'react';
import { Box, Button } from '@mui/material';
import Dialectic from './components/Dialectic';
import Dialog from './components/Dialectic'; 
import { postFetch, DIALECTIC_ROUTE } from './utils/useFetch';
import { useNavigate } from 'react-router-dom';
import DialogCard from './components/DialogCard';

const cardStyles = {
    width: '100%',
    height: '50px',
};

const DialecticList = ({dialecticList}) => {
    const navigate = useNavigate();
    const [openCreateDialectic, setOpenCreateDialectic] = useState(false);

    const handleClick = (e, idx) => {
        console.log(idx);
        navigate(`/propositions/${idx}`);
    }

    const handleSubmit = async (content) => {
        console.log({content});
        
        const res = await postFetch(DIALECTIC_ROUTE, {
            name: content.text
        });
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
                        <Dialectic key={idx} dialectic={dialectic} />
                    </div>
                )
            })}
            <Button onClick={() => setOpenCreateDialectic(true)}>New</Button>
            <DialogCard onSubmit={(e, idx) => handleSubmit(e, idx)} onClose={() => setOpenCreateDialectic(false)} open={openCreateDialectic}/>
        </Box>
    );
}
 
export default DialecticList;