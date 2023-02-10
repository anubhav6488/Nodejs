const express=require('express')
const dbconnect=require('./mongodb')
const mongodb=require('mongodb')
const app=express();

app.use(express.json());


app.get('/',async (req,resp)=>{

    let data=await dbconnect();

    data=await data.find({}).toArray();

   
    resp.send(data)






});

app.post('/',async (req,resp)=>
{
    let data= await dbconnect();
    //data= await data.find({}).toArray();

    //resp.send({name:"anubhav"})
    //console.log(data)
    let result=await data.insertOne(req.body)
    resp.send(result)

    console.log(req.body);



});

app.put("/:id",async (req,resp)=>{

    let data=await dbconnect();
console.log('req====',req);
    let result=await data.updateMany(
        {id: req.params._id},
        { $set:req.body.body}

    )
    console.log('req====',result);
    resp.send({ result:"updated"});


});

app.delete('/:id', async(req,resp)=>{


    const data=await dbconnect();
    console.log(req.params.id)
    const result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    console.log(req.params.id)

resp.send(result)
console.log(result)
    

});


app.listen(4800);
