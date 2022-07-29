import React from 'react'
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
    }
}
export const ContentReducer = (state=initState,{type,payload}) => {

    switch (type) {
        case GETTOPICS:
            return{...state, }
           
        default:
            return state;
    }
  
}
