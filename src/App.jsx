
import './App.css';
import booksData from '../books.json';
import Book from './components/Book';
import { useState } from 'react';

function App() {
  const [bookCount, setBookCount] = useState(booksData.library.length)
  const [listCount, setListCount] = useState(0)

  const handleAddBook = () => {
    if (listCount < booksData.library.length){
      setBookCount(bookCount - 1);
      setListCount(listCount + 1);
    }
  };
  
  const handleRemoveBook = () => {
    if (bookCount < booksData.library.length){
      setBookCount(bookCount + 1);
      setListCount(listCount - 1);
    }
  };

  const handleRemoveAll = () => {
    setListCount(0);
    setBookCount(booksData.library.length)
  }

  return (
    <>
      <h1>Una libreria increible 📚</h1>
      <h2>{bookCount} libros disponibles</h2>
      <h3>{listCount} en la lista de lectura</h3>  
      <div className="actionBar">
        <button onClick={handleAddBook}>Add Book</button>
        <button onClick={handleRemoveBook}>Remove Book</button>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>
      <div className="main">
        <div className="readingList">
          <div className="book">
            <img className="bookCover" src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg'/>
          </div>
          <div className="book">
            <img className="bookCover" src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg'/>
          </div>
          <div className="book">
            <img className="bookCover" src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg'/>
          </div>
        </div>
        <div className="books">
          <div className="wrapper">
            {booksData.library.map((bookData, index) => (
              <Book key={index} book={bookData.book} onAddBook={handleAddBook} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
