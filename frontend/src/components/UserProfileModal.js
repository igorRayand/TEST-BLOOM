import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const UserProfileModal = ({children, id}) => {
    
    const [open, setOpen] = useState(false);
    const [author, setAuthor] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (open) {
            axios.get('/users/' + id).then((res) => {
                setAuthor(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [open])

    return (
        <>
        { children ? (<span onClick={handleOpen}>{children}</span>) : (<></>) }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {author.username}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {author.name}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default UserProfileModal
