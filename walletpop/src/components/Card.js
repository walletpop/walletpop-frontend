import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {

  function formatteDate(date){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate;
  }

  return (
    <Card style={{ width: '35rem' }}>
      <Card.Img style={{maxWidth: "fit-content"}} variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text><b>Created:</b> {formatteDate(props.created)}</Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Buy it</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
