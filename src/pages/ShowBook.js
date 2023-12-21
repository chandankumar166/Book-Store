import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/pages/ShowBook.css';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      });

  });
  return (
      <div className='show-book'>
        <div>
          <span>Title: </span>
          <span>{book.title}</span>
        </div>
        <div>
          <span>Author:</span>
          <span>{book.author}</span>
        </div>
        <div>
          <span>Publish Year:</span>
          <span>{book.publishYear}</span>
        </div>
        <div>
          <span>Created Time:</span>
          <span>{new Date(book.createdAt).toString()}</span>
        </div>
        <div>
          <span>Updated Time:</span>
          <span>{new Date(book.updatedAt).toString()}</span>
        </div>
      </div>
  );
};

export default ShowBook;
