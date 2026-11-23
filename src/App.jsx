import { useState } from 'react';
import "./styles.css";
  
    function Books() {
  const [books, setBooks] = useState([
    {id:1, title: "Harald",author: "James"},
    {id:2, title: "Harry", author: "Jimmothy"}
  ]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
    

  return (
    <>
      <h1>My Books: </h1>
      <ul>
        {books.map((book,index) => <li key={book.id}> #{index+1}- "{book.title}" by {book.author}</li>)}
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
