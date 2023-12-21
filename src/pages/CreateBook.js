import {Button, TextField} from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/pages/CreateBook.css';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    axios.post('http://localhost:3000/books', data)
    .then(() => navigate('/'))
    .catch((error) => console.log(error));
  }

  return (
    <div className='create-book-page'>
      <div className='newbook-details'>
        <h2>Add New Book</h2>
        <TextField label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Author" variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <TextField label="Publish Year" variant="outlined" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
        <Button variant='contained' onClick={handleSaveBook}>Submit</Button>
      </div>
    </div>
  );
}

export default CreateBook;
