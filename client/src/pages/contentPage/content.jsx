import s from "./content.module.css";
import { Card, ListGroup } from "react-bootstrap";
import { Layout } from "../../components/content/layout";
import { CodeEX } from "../../components/content/codeEX";
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {   GetList, GetTopics } from "../../redux/action/content";
import { useParams } from "react-router-dom";
export const ContentPage = () => {
  const dispatch = useDispatch();
  const {
    codeEx,
    comments,
    description = [],
    title,
    image,
    author,
    likes,
    list=[],
    subList=[],
    type,
    isLoading,
    isError,
    createdAt,
    _id,
  } = useSelector((state) => state.ContentReducer.topic);


const topicList = useSelector((state) => state.ContentReducer);

  const { id } = useParams();

  const  GetsubList =()=>{
    if(_id){
     dispatch( GetList(_id))
    }
  }

  useEffect(() => {
    dispatch(GetTopics(id));
    GetsubList();
  },[]);

  return (
    <div className={s.mainDiv}>
      <Layout />
      <br />
      <Card bg="dark" text="white" className="p-3 mb-2 border border-warning">
        <h1>{title}</h1>
        <Card.Header>{createdAt}</Card.Header>

        {description.map((el, i) => {
          return (
            <>
              <Card.Body key={i}>
                <Card.Title>{el.title}</Card.Title>
                {el.listPoints.map((el, i) => {
                  return <Card.Text key={i}>{el}</Card.Text>;
                })}
              </Card.Body>
            </>
          );
        })}
        <div className={s.imgDiv}>
          <img
            src={image}
            alt=""
          />
        </div>
        {/* <CodeEX code={codeEx} /> */}
        {
  list.map((el,i)=>{
    return <>
      <div key={i}>
        <h5>{el.head}</h5>
      <ul>
        {
          el.subList.map((el,i)=>{
            return <div key={i}>
             <li>{el}</li>
            </div>
          })
         
        } 
         </ul>
        </div>
    </>
  })
}         
        <ListGroup text="dark" as="ol" numbered>
          <Link to='/62e40a4e992567b7f814a398'>
          <ListGroup.Item as="li">
          What Is a Front-End Developer?
          </ListGroup.Item>
          </Link>
          <Link to='/'>
          <ListGroup.Item as="li">
            What is backend web development?
          </ListGroup.Item>
          </Link>
          <ListGroup.Item as="li">
            How to become a full-stack web developer
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
