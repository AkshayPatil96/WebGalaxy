
const {Router}=require('express');
const Topic = require('../model/Topic');


const TopicRouter=Router();


TopicRouter.post('/create',async(req,res)=>{

   const topic  = new Topic(req.body);
   console.log(topic)
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

   const topic= await Topic.findById(_id)

         if(topic){
             res.status(201).send({data:topic,success:true})
         }
         else{
             console.log(err)
             res.status(401).send({massage:'error occurred',success:false})
         }
     
 })

module.exports=TopicRouter;