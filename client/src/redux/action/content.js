import axios from "axios";
import {  GETLISTS, GETTOPICS } from "../types/content";




export const GetTopics = (id) => async (dispatch) => {
  try {
    dispatch({ type: GETTOPICS, payload: { loading: true } });

    const res = await axios.get( `http://localhost:8080/topic/${id}`);
  
        dispatch({
          type:GETTOPICS,
          payload:{
           ...res.data.topic,
            isLoading:false,
            isError:false,
          }
        })
      }catch(e){
        dispatch({
          type:GETTOPICS,
          payload:{
            isLoading:false,
            isError:true,
          }
        })
  }
};



export const GetList = (id) => async (dispatch) => {
  try {
    dispatch({ type: GETLISTS, payload: { loading: true } });

    
    const res = await axios.get( `http://localhost:8080/topic/list/${id}`);
        console.log(res.data)

        dispatch({
          type:GETLISTS,
          payload:{
           ...res.data.TopicList,
            isLoading:false,
            isError:false,
          }
        })
      }catch(e){
        dispatch({
          type:GETLISTS,
          payload:{
            isLoading:false,
            isError:true,
          }
        })
  }
};

