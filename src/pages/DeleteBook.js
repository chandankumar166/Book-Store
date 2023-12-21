import {Button, Typography} from '@mui/material';
import axios from 'axios';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import '../styles/pages/DeleteBook.css';

const DeleteBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () => {
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='delete-book-page'>
      <div>
        <Typography variant='h6'>Are you sure, You want to delete this book?</Typography>
        <Button variant='contained' onClick={handleDeleteBook} fullWidth color='error'>Yes, Delete it</Button>
      </div>
    </div>
  );
};

export default DeleteBook;
