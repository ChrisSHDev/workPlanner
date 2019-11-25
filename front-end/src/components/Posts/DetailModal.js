import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PostDetails from '../Posts/PostDetails'

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

export default function TransitionsModal(props) {

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
            <PostDetails post={props.post}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}