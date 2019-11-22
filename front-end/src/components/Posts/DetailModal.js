import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import AddPost from './AddPost';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '91%',
    height: '100% !important',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

export default function TransitionsModal() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () =>{
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <div className={classes.modalBox} onClick={handleOpen}></div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            Details
          </div>
        </Fade>
      </Modal>
    </div>
  );
}