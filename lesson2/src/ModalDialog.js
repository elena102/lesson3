
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './Form';

const ModalDialog = ({ open, handleClose }) => {
  return (
    //реквизит, полученный от App.js;
    <Dialog open={open} onClose={handleClose}>
     
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;