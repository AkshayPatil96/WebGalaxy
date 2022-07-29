import axios from "axios";
import {  GETTOPICS } from "../types/content";


export const GetTopics = (id) => async (dispatch) => {
  try {
    dispatch({ type: GETTOPICS, payload: { loading: true } });
    const res = await axios.get(
         `http://localhost:8080/topic/${id}`
        );
      let subTopic=res.data.subTopic;
      console.log(res.data)
        dispatch({
          type:GETTOPICS,
          payload:{
           ...res.data.topic,subTopic,
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

