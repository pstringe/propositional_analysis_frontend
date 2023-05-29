import { useState } from 'react';
import { Dialog, TextField, Button } from '@mui/material';
import { title } from 'process';

const styles = {
    display: 'flex',
    gap: '0.5rem',
    marigin: '1rem',
    height: 200
}

const DialogCard = ({open, onSubmit, onClose}) => {
    const [content, setContent] = useState({});

    const handleChange = (e) => {
        const text = e.target.value;
        console.log({text});
        setContent({
            ...content,
            text
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({content})
        onSubmit(content)
        onClose()
    }

    return ( 
        <Dialog sx={styles} onClose={onClose} open={open}>
            <TextField onChange={handleChange} value={content.title}></TextField>
            <Button onClick={handleSubmit}>Submit</Button>
        </Dialog>
    );
}
 
export default DialogCard;