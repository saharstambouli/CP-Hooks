import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieCard(movie) {
    console.log("movie" , movie.Title);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.PosterUrl} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Description} <br />
          {movie.rating}
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;