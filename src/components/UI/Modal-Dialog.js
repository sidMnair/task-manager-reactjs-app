import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core';

const ModalDialog = (props) => {


  return (
    <Dialog
      open={props.openModal}
      onClose={props.closeModal}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create A New Task</DialogTitle>
      <DialogContent className="dialog-content">
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeModal} color="primary">
          Cancel
            </Button>
        <Button onClick={props.addTask} color="primary">
          Create
            </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalDialog;