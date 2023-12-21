import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import '../styles/pages/Home.css';


const Home = () => {
    const [books, setBooks] = useState([]);
    // const [loading, setLoading] = useState(false);
    useEffect(() => {
        // setLoading(true);
        axios
            .get('http://localhost:3000/books')
            .then((response) => {
                setBooks(response.data.data);
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                // setLoading(false);
            });
    }, []);
    return (
        <TableContainer className='home'>
            <div className='header'>
                <h2>Book List</h2>
                <Link to='/books/create'><h2><AddBoxOutlinedIcon /></h2></Link>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID
                        </TableCell>
                        <TableCell>
                            Title
                        </TableCell>
                        <TableCell>
                            Author
                        </TableCell>
                        <TableCell>
                            Publish Year
                        </TableCell>
                        <TableCell>
                            Operations
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        books.map((book) => {
                            return <TableRow key={book._id}>
                                <TableCell>{book._id}</TableCell>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.publishYear}</TableCell>
                                <TableCell>
                                    <div>
                                        <Link to={`/book/details/${book._id}`}><InfoOutlinedIcon /></Link>
                                        <Link to={`/book/edit/${book._id}`}><EditOutlinedIcon /></Link>
                                        <Link to={`/book/delete/${book._id}`}><DeleteOutlinedIcon /></Link>
                                    </div>
                                </TableCell>
                            </TableRow>;
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Home;
