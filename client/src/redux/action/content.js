import axios from "axios";
import { GETTOPICS } from "../types/content";

export const GetTopics=async(id,dispatch)=>{
try{
  const res = await axios.get(
    "http://localhost:8080/topic/62e39cee602ffd1e39047fd1"
  );
  console.log(res.data.data)
  dispatch({
    type:GETTOPICS,
    payload:{
      codeEx:[],
      comments:[],
      description:[],
      listPoints:[],
      title:"",
      image:"",
      author:"",
      likes:0,
      list:[],  
      sublist:[],
      type:"",
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
