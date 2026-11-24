import { useState } from 'react';
import "./styles.css";
  
  function Books() {
  const [books, setBooks] = useState([
    {id:1, title: "TitleTest",author: "AuthorTest", genre:"SciFi", info:"Other"},
    {id:2, title: "TitleTest2", author: "AuthorTest2", genre:"Fantasy", info:"Other"}
  ]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [info, setInfo] = useState('');

function bookAdd(e) {
    e.preventDefault();
    if(!title.trim() || !author.trim()) return;

    const bookIdCreater = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    
    const newBook = {
      id: bookIdCreater,
      title: title.trim(),
      author: author.trim(),
      rating: null,
      showRating: false,
      info: info.trim(),
      genre: genre.trim(),
    };

    setBooks([...books, newBook])
    setTitle('');
    setAuthor('');
    setInfo('');
    setGenre('');
}
function bookManage(idToRemove){
  if (idToRemove <= 2) return;
  setBooks(books.filter((book) => book.id !== idToRemove));
}

function toggleInfo(idToToggle){
  setBooks(
    books.map((book) =>
      book.id === idToToggle ? { ...book, showInfo: !book.showInfo} : book
  )
);
}
function  toggleRating(idToToggle){
  setBooks(
    books.map((book) =>
    book.id === idToToggle ? { ...book, showRating: !book.showRating } : book
    )
  )
}
function bookRate(rate, newRate){
  setBooks(
    books.map((book) =>
      book.id === rate ? {...book, rating: newRate} : book
  )
);
}
function displayRate(dRate){
  return dRate === null ? 'There is no rating' : `Rating: ${dRate}/5`
}

function bookId(book){
  const slot = books.indexOf(book) +1; 
  return books.length > 2 ? slot - 2: slot;
}
function bookButtons(book) {
  if (book.id <= 2) return null;
  
  return (

      <>
        <button type="button" onClick={() => bookManage(book.id)}>
          Delete Book
        </button>{' '}
        <button type="button" onClick={() => toggleRating(book.id)}>
          {book.showRating ? 'Hide Rating' : 'Rate'}
        </button>
      <button type="button" onClick={() => toggleInfo(book.id)}>
          {book.showInfo ? 'Hide Info' : 'More Info'}
        </button>

        {book.showRating && (
          <span style={{ marginLeft: '8px' }}>
            {displayRate(book.rating)}{' '}
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => bookRate(book.id, num)}
              >
                {num}
              </button>
            ))}
          </span>
        )}
        {book.showInfo && (
        <div style={{ marginTop: '4px' }}>
          <p>Genre: {book.genre || 'None'}</p>
          <p>Info: {book.info || 'None'}</p>
          <p>Rating: {book.rating || 'None'}</p>
        </div>
)}
      </>
    );
  }

const visibleBooks = books.length > 2 ? books.slice(2) : books;

  return (
    <>
      <h1>My Books: </h1>

      <form onSubmit={bookAdd}>
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
         <input
          type="text"
          placeholder="Additional Info (optional)"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <button type="submit"> Add New Book</button>
        </form>
      
      <ul>

        {visibleBooks.map((book) => ( <li key={book.id}> #{bookId(book)}- "{book.title}" by {book.author}{''}
          {bookButtons(book)}
          </li>
        ))}
      </ul>
    </>
  );
}

  
      export default function App(){
        return (
          <main>
            <Books />
          </main>
        );
      
    }
