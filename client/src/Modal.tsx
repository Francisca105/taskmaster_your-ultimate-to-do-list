import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';

interface ModalProps {
  msg: string;
}

const PopUp: React.FC<ModalProps> = ({ msg }) => {
    // const [open, setOpen] = React.useState(true);
    // const handleOpen = () => {
    //   setOpen(true);
    // };
    // const handleClose = () => {
    //   setOpen(false);
    // };

    // return (
    //     <Modal
    //         open={open}
    //         onClose={handleClose}
    //         aria-labelledby="modal-modal-title"
    //         aria-describedby="modal-modal-description"
    //     >
    //         <Box>
    //         <Typography id="modal-modal-title" variant="h6" component="h2">
    //             Text in a modal
    //             {msg}
    //         </Typography>
    //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //         </Typography>
    //         </Box>
    //     </Modal>
    // );

    return (
        <Alert 
        icon={<ErrorIcon fontSize="inherit" />} severity="error"
        style={{
            width: '50%',
        }}
        >
            {msg}
        </Alert>
    )
}

export default PopUp;
