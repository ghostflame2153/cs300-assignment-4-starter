import { useState } from 'react';
import "./styles.css";
  
    function Books() {
  const [books, setBooks] = useState([
    {id:1, title: "Harald",author: "James"},
    {id:2, title: "Harry", author: "Jimmothy"}
  ]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

function bookAdd(e) {
    e.preventDefault();
    if(!title.trim() || !author.trim()) return;

    const bookIdCreater = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    
    const newBook = {
      id: bookIdCreater,
      title: title.trim(),
      author: author.trim(),
    };

    setBooks([...books, newBook])
    setTitle('');
    setAuthor('');
}
function bookManage(idToRemove){
  setBooks(books.filter((book) => book.id !== idToRemove));
}

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
        <button type="submit"> Add New Book</button>
        </form>
      <ul>
        {books.map((book) => <li key={book.id}> #{book.id}- "{book.title}" by {book.author}
        <button type="button" onClick={() => bookManage(book.id)}>Delete Book</button></li>
      )}
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
