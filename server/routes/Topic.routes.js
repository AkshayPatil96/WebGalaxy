
const {Router}=require('express');
const Topic = require('../model/Topic');


const TopicRouter=Router();


TopicRouter.post('/create',async(req,res)=>{

   const topic  = new Topic(req.body);
 
    topic.save((err,success)=>{
        if(success){
            res.status(201).send({massage:'new topic created',success:true})
        }
        else{
            console.log(err)
            res.status(401).send({massage:'error occurred',success:false})
        }
    }) 
})


TopicRouter.get('/:_id',async(req,res)=>{

    const {_id}=req.params
    const subTopic= await Topic.find({parentId:{$in:["62e408ef992567b7f814a396"]}})
    console.log(subTopic)
   const topic= await Topic.findById(_id)
         if(topic){ 
             res.status(201).send({topic,subTopic})
         }
         else{
             res.status(401).send({massage:'error occurred',success:false})
         }
     
 })

module.exports=TopicRouter;