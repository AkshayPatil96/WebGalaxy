import s from "./content.module.css";
import {   Card,  ListGroup,  } from "react-bootstrap";
import { Layout } from "../../components/content/layout";
import { CodeEX } from "../../components/content/codeEX";

export const ContentPage = () => {
  return (
    <div className={s.mainDiv}>
      <Layout />
      <br />
      <Card
        bg="dark"
        key="dark"
        text="white"
        className="p-3 mb-2 border border-warning"
      >
        <h1>Full Stack Web Development</h1>
       
        <Card.Header>WebGalaxy: Sep 13, 2021</Card.Header>
        <Card.Body>
          <Card.Title>What is a Full-Stack Web Developer Exactly?</Card.Title>
          <br />
          <Card.Text>
            So you’ve heard of frontend and backend development and what they
            involve, but what is a full-stack developer, what do they do, and
            why are they so in-demand? This guide will clear it all up for you.
          </Card.Text>
          <Card.Text>
         
            A post-it note with the question “What is a full-stack developer”
            written on it has been sitting on my desk for a few weeks. At first,
            I didn’t know how to approach the question. I wanted to develop an
            answer that made sense to anyone new to the arena of web
            development, but that still touched upon the finer details.
          </Card.Text>
          <Card.Text> After
         all, maybe you are someone interested in making a career change and
         have repeatedly seen the words “full-stack web developer” on every
         technical educational website and job application.
       </Card.Text>
<div  className={s.imgDiv}>
<img  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="" />
</div>      
         
<Card.Title>What is a Full-Stack Web Developer Exactly?</Card.Title>
          <br />
          <Card.Text>
            So you’ve heard of frontend and backend development and what they
            involve, but what is a full-stack developer, what do they do, and
            why are they so in-demand? This guide will clear it all up for you.
          </Card.Text>
          <Card.Text>
         
            A post-it note with the question “What is a full-stack developer”
            written on it has been sitting on my desk for a few weeks. At first,
            I didn’t know how to approach the question. I wanted to develop an
            answer that made sense to anyone new to the arena of web
            development, but that still touched upon the finer details.
          </Card.Text>
          <Card.Text> After
         all, maybe you are someone interested in making a career change and
         have repeatedly seen the words “full-stack web developer” on every
         technical educational website and job application.
       </Card.Text>
       <CodeEX/>
        <ListGroup    text="dark" as="ol" numbered>
            <ListGroup.Item variant="info"    as="li">
              What is frontend web development?
            </ListGroup.Item>
            <ListGroup.Item as="li">
              What is backend web development?
            </ListGroup.Item>
            <ListGroup.Item as="li">
              How to become a full-stack web developer
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
