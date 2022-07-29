
import {model,Schema} from 'mongoose';

const TopicSchema = new Schema({
    _id: { type: ObjectId},
    index:{type:Number},
    title:{type:String,require:true},
    image:{type:String},
    description:{
        type:{subtitle:[{title:String,listPoints:[]}],},
    },
    parentId:{type:[ObjectId]},
    author:{type:String,require:true},
    likes:{type:Number,default:0},
    comments:{type:[ObjectId]},
    codeEx:{type:String},
    list:[{head:String,subList:[]}],  
},
{ versionKey: false,
    timestamps: true,})