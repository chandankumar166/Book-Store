import {Routes, Route} from 'react-router-dom';
import { CreateBook, DeleteBook, EditBook, Home, ShowBook } from './pages';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/book/details/:id' element={<ShowBook />} />
      <Route path='/book/edit/:id' element={<EditBook />} />
      <Route path='/book/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
