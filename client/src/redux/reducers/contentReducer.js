
import { GETTOPICS } from '../types/content'

const initState={
    topic:{
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
        isLoading:true,
        isError:false,
        subTopic:[]
    }
}
export const ContentReducer = (state=initState,action) => {

    switch (action.type) {
        case GETTOPICS:
          return{
            ...state,topic:action.payload }
           
        default:
            return state;
    }
  
}
