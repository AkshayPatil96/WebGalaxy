
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  ListGroup,
  Offcanvas,
  Stack,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/content/layout";
import s from "./content.module.css"


export const IntroPage = () => {

    const {tech}=useParams();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className={s.mainDiv}>
        <Layout/>
        <br />
      <Card>
        <Card.Header>{tech}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          value={Comment}
          className="me-auto"
          placeholder="Add your Comment here..."
        />
        <Button  variant="secondary">
          Comment
        </Button>
        <div className="vr" />
      </Stack>
      <br />
      <Button variant="primary" >
      
      </Button>{" "}
      <Button variant="primary">
      
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
          
                <ListGroup.Item
               
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"></div>
                    
                  </div>
                  <Badge bg="primary" pill></Badge>
                </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
