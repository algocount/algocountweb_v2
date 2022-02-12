import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const MaterialCard = (props) => {


  return (
    <Card style = {{width:"auto", maxWidth: "300px", margin:".5em"}}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <button className="method-button"> <Link to={`/materials/${props.title.toLowerCase().replace(/ /g, "-")}`}>Read More</Link> </button>
      </Card.Body>
    </Card>
  );
}; 

export default MaterialCard;
