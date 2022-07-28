
import {model,Schema} from 'mongoose';

const Topic = new Schema({
    _id: { type: ObjectId},
    title:{type:String,require:true},
    subtitle:{type:String},
    image:{type:String},
    description:{
        type:Object,
    },
    parentId:{type:[ObjectId]},
    author:{type:String,require:true},
    likes:{type:Number,default:0},
    comments:{type:[ObjectId]}
},
{ versionKey: false,
    timestamps: true,})