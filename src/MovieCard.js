import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          
          {movie.description}
        </Card.Text>
        <Button variant="primary">{movie.rate}</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;