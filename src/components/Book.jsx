import PropTypes from 'prop-types';

const Book = ({ book, onAddBook }) => {
  const { title, cover, synopsis } = book;

  const handleAddToList = () => {
    // Llama a la función pasada como prop desde App.jsx
    onAddBook();
  };

  return (
    <div className="book">
      <img className="bookCover" src={cover} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{synopsis}</p>
        <button onClick={handleAddToList}>ADD TO LIST</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
  onAddBook: PropTypes.func.isRequired,
};

export default Book;
