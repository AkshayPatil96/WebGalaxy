import s from './content.module.css'
import {
    Button,
    Card,
    Form,
    Stack,
  } from "react-bootstrap";

export const ContentPage=()=> {
  return (
       <div className={s.mainDiv}>
    <Card className="bg-dark text-white">
      <Card>
        <Card.Header>FULL STACK DEVELOPMENT: INTRODUCTION</Card.Header>
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
    </Card>
    </div>
  );
}

