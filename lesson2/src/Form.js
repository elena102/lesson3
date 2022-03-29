 import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));


const Form = ({ handleClose }) => {
  const classes = useStyles();
  //  переменные состояния для каждого ввода
  const [Name, setName] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
   
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit} >
      <TextField autoFocus
       onLoad="setFocus()"
        label="Сообщение"
        variant="filled"
        required
        value={Name}
        onChange={e => setName(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
        Отменить
        </Button>
        <Button type="submit" variant="contained" color="default" >
       Отправить сообщение
        </Button>
      </div>
    </form>
  );
};

export default Form;