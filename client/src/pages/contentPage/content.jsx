import s from "./content.module.css";
import { Badge, Button, Card, Form, Stack } from "react-bootstrap";
import { Layout } from "../../components/content/layout";
import { CodeEX } from "../../components/content/codeEX";

export const ContentPage = () => {
  return (
    <div className={s.mainDiv}>
      <Layout />
      <br />
      <Card
        bg="secondary"
        key="dark"

        text="white"
        className="p-3 mb-2 border border-warning"
      >
        <h1>Full Stack Web Developer</h1>
        <Card.Header>WebGalaxy: Sep 13, 2021</Card.Header>
        <Card.Body>
          <Card.Title>FULL STACK DEVELOPMENT: INTRODUCTION</Card.Title>
          <br />
          <Card.Text>
            HTML stands for Hyper Text Markup Language HTML is the standard
            markup language for creating Web pages HTML describes the structure
            of a Web page HTML consists of a series of elements HTML elements
            tell the browser how to display the content HTML elements label
            pieces of content such as "this is a heading", "this is a
            paragraph", "this is a link", etc.
          </Card.Text>
          <Card.Title>FULL STACK DEVELOPMENT: INTRODUCTION</Card.Title>
          <Card.Text>
            <CodeEX />
            HTML stands for Hyper Text Markup Language HTML is the standard
            markup language for creating Web pages HTML describes the structure
            of a Web page HTML consists of a series of elements HTML elements
            tell the browser how to display the content HTML elements label
            pieces of content such as "this is a heading", "this is a
            paragraph", "this is a link", etc.
          </Card.Text>
        </Card.Body>
        <Card.Header>WebGalaxy: Sep 13, 2021</Card.Header>
        <Card.Body>
          <Card.Title>FULL STACK DEVELOPMENT: INTRODUCTION</Card.Title>
          <br />
          <Card.Text>
            HTML stands for Hyper Text Markup Language HTML is the standard
            markup language for creating Web pages HTML describes the structure
            of a Web page HTML consists of a series of elements HTML elements
            tell the browser how to display the content HTML elements label
            pieces of content such as "this is a heading", "this is a
            paragraph", "this is a link", etc.
          </Card.Text>
          <Card.Title>FULL STACK DEVELOPMENT: INTRODUCTION</Card.Title>
          <Card.Text>
            <CodeEX />
            HTML stands for Hyper Text Markup Language HTML is the standard
            markup language for creating Web pages HTML describes the structure
            of a Web page HTML consists of a series of elements HTML elements
            tell the browser how to display the content HTML elements label
            pieces of content such as "this is a heading", "this is a
            paragraph", "this is a link", etc.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
