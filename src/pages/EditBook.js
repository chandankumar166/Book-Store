import {Button, TextField} from '@mui/material';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import '../styles/pages/CreateBook.css';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    axios.put(`http://localhost:3000/books/${id}`, data)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div className='create-book-page'>
      <div className='newbook-details'>
        <h2>Edit Book Details</h2>
        <TextField label="Title" variant="outlined" value={title} onChange={(e) => {setTitle(e.target.value);}} />
        <TextField label="Author" variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <TextField label="Publish Year" variant="outlined" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
        <Button variant='contained' onClick={handleSaveBook}>Submit</Button>
      </div>
    </div>
  );
};

export default EditBook;
