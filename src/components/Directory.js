import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './Directory.css';


function Directory(props) {
  const [show, set2] = React.useState(false);

  const handle1 = () => set2(false);
  const handle2 = () => set2(true);
  return (
    <div key={props.params.name.first}>
      <Button className="btn-sm " onClick={handle2}>{props.params.name.first} {props.params.name.last}</Button>
        <Modal show={show} onHide={handle1}>
        <Modal.Header closeButton>
          <Modal.Title className="Card-Text1">
            <img className="img-fluid "src={props.params.picture.large}alt={props.params.name.first}/>
            <h1>{props.params.name.title}. {props.params.name.first}{" "}{props.params.name.last}</h1>
            <p>Age: {props.params.dob.age}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Card-Text2">
          <ul>
            <li>Phone: {props.params.phone} </li>
            <li>Email: {props.params.email} </li>
            <li>Address: {props.params.location.street.number}{" "}{props.params.location.street.name}, {props.params.location.city},{" "}{props.params.location.state}, {props.params.location.country}{" "}
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer className="Card-Text3">
          <Button className="btn-sm " onClick={handle1}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Directory;
