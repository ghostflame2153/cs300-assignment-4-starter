import { createRoot } from 'react-dom/client';
import Books from './App.jsx';
/*

function Books() {
  const book = [books, setBooks] = useState([
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
    )}
*/
    createRoot(document.getElementById('root')).render(<App/>)
