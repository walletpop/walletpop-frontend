import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item(props) {

  function formatteDate(date){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate;
  }

  return (
    <Card style={{ width: props.size }}>
      <Card.Img style={{maxWidth: "-webkit-fill-available"}} variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text><b>Created:</b> {formatteDate(props.created)}</Card.Text>
        {props.showPrice ?  <Card.Text><b>Price:</b> {props.price}</Card.Text> : null}
        <Card.Text>
          {props.description}
        </Card.Text>
        <Link to={props.link ? null : `/item/${props.id}`} >
          <Button onClick={props.link ? props.link : null} variant="primary">{props.buttonText ? props.buttonText : 'Buy it'}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
