import { SyntheticEvent } from 'react';
import {useState } from 'react';
import { postFetch, DIALECTIC_ROUTE } from './utils/useFetch';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Dialectic from './components/DialecticItem';
import DialogCard from './components/DialogCard';
import { Dialectic as IDialectic } from './types/interfaces';
import { FormContent } from './types/interfaces';

const cardStyles = {
    width: '100%',
    height: '50px',
};

interface DialecticListProps {
    dialecticList: IDialectic[];
    refresh: Function;
}

const DialecticList = ({dialecticList, refresh}: DialecticListProps) => {
    const navigate = useNavigate();
    const [openCreateDialectic, setOpenCreateDialectic] = useState(false);

    const handleClick = (e: SyntheticEvent, idx: number) => {
        console.log(idx);
        navigate(`/propositions/${idx}`);
    }
   
    const handleSubmit = async (e: SyntheticEvent<EventTarget>, dialectic: FormContent) => {
        await postFetch(DIALECTIC_ROUTE, dialectic);
        refresh()
    }

    return (
        <Box sx={{
            height: '100%',
            margin: '1rem'
        }}>
            <h1>Dialectic</h1>
            {dialecticList?.length ?? dialecticList?.map((dialectic, idx) => {
                console.log({idx})
                return (
                    <div style={cardStyles} onClick={(e) => handleClick(e, idx)}>
                        <Dialectic key={idx} dialectic={dialectic} />
                    </div>
                )
            })}
            <Button onClick={() => setOpenCreateDialectic(true)}>New</Button>
            <DialogCard onSubmit={handleSubmit} onClose={async () => setOpenCreateDialectic(false)} open={openCreateDialectic}/>
        </Box>
    );
}
 
export default DialecticList;