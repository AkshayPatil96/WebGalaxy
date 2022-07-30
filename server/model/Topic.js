
 const{model,Schema} =require('mongoose');

const TopicSchema = new Schema({
    index:{type:Number, default:0},
    title:{type:String,require:true},
    image:{type:String},
    description:{
        type:[{title:String,listPoints:[String]}],
    },
    parentId:{type:[String]},
    author:{type:String,default:'WebGalaxy'},
    likes:{type:Number,default:0},
    comments:{type:[Schema.Types.ObjectId]},
    codeEx:{type:[]},
    list:[{head:String,subList:[]}],  
    type:{type:String,default:'article'}
},
{ versionKey: false,
    timestamps: true,})


    const Topic =model('Topic',TopicSchema);
    module.exports =Topic;