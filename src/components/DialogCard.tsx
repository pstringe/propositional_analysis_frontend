import { SyntheticEvent, useState } from 'react';
import { Dialog, TextField, Button } from '@mui/material';
import React from 'react';
import { FormContent } from '../types/interfaces';

const styles = {
    display: 'flex',
    gap: '0.5rem',
    marigin: '1rem',
    height: 200
}

interface DialogCardProps {
    open: boolean;
    onSubmit: (e: SyntheticEvent<EventTarget>, content: FormContent) => Promise<void>;
    onClose: () => {};
}



const DialogCard = ({open, onSubmit, onClose}: DialogCardProps) => {
    const [content, setContent] = useState({} as FormContent);

    const handleChange = (e: any) => {
        const text = e.currentTarget.value;
        console.log({text});
        setContent({
            ...content,
            text
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onSubmit(e, content);
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