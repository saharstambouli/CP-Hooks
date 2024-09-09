import './App.css';
import { useState } from 'react';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Filter from './Components/Filtrer';
import NavigationBar from './Components/Navbar';


function App() {

  const [movies, setMovies] = useState([
    {
      Title: "Gladiator",
      Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family",
      PosterUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      rating: 5,
    },
    {
      Title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      PosterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      rating: 4,
    },
    {
      Title: "12 years a slave",
      Description: "In the antebellum United States, Solomon Northup, a free black",
      PosterUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/12_Years_a_Slave_film_poster.jpg",
      rating:  3,

    },

  ]);

const [rating,setRating] =useState(1)

  const [addButton, setAddButton] = useState(false);
  const [keywords, setKeyWords] = useState("");
  
  
  
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    
  };


  
  
  
  const handleAdd = () => {
    setAddButton (!addButton);
  }
    
  console.log('movies', movies)
  return (
    <div className="App">
      <NavigationBar />
      <button onClick={handleAdd}>  {addButton ? "Hide Movies": "Add Movies " } </button>
      {addButton && (
        <AddMovie addMovie={addMovie} />  
    )}

<hr />
      <header className="App-header">
      <Filter setKeyWords={setKeyWords}  setRating={setRating}/>

        <hr />
        <hr />
        <hr />
        <MovieList movies={ movies.filter((el,i)=>(el.Title.toLowerCase().includes(keywords?.toLowerCase()?.trim()) && el.rating>=rating))} />

      </header>
    </div>
  );
}

export default App;
