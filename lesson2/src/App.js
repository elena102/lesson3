
import ModalDialog from './ModalDialog';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AlignItemsList from './AlignListItems'

const App = () => {
  
   
  // объявить новую переменную состояния для модального open
  const [open, setOpen] = useState(false);

  // функция для обработки модального открытия
  const handleOpen = () => {
    setOpen(true);
   };

  // функция для обработки модального закрытия
   const handleClose = () => {
    setOpen(false);
   };
 
    
  return (
  <>
       <Button variant="contained" color="primary" onClick={handleOpen}>
      отправить сообщение
      </Button> 
     
      <ModalDialog open={open} handleClose={handleClose} /> 
      <AlignItemsList/>
    </>
  );
  
};

export default App;