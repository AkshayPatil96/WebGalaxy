import s from "./content.module.css";
import { Card, ListGroup } from "react-bootstrap";
import { Layout } from "../../components/content/layout";
import { CodeEX } from "../../components/content/codeEX";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import { GetTopics } from "../../redux/action/content";
import { useParams } from "react-router-dom";
export const ContentPage = () => {
  
  const dispatch=useDispatch()
  const topic=useSelector((state)=>state.topic)
  console.log(topic)
  const {id}=useParams();

  // useEffect(() => {
  // dispatch(GetTopics(id))
  // }, []);

  return (
    <div className={s.mainDiv}>
      <Layout />
      <br />
      <Card bg="dark" text="white" className="p-3 mb-2 border border-warning">
        <h1>{topic.title}</h1>

        <Card.Header>
          {topic.author}: {topic.createdAt}
        </Card.Header>
        {topic.description.map((el, i) => {
          return (
            <>
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <br />
                {el.listPoints.map((el, i) => {
                  return (
                    <>
                      <Card.Text>{el}</Card.Text>
                    </>
                  );
                })}
              </Card.Body>
            </>
          );
        })}
          <CodeEX />
          <ListGroup text="dark" as="ol" numbered>
            <ListGroup.Item variant="info" as="li">
              What is frontend web development?
            </ListGroup.Item>
            <ListGroup.Item as="li">
              What is backend web development?
            </ListGroup.Item>
            <ListGroup.Item as="li">
              How to become a full-stack web developer
            </ListGroup.Item>
          </ListGroup>
      </Card>
    </div>
  );
};
