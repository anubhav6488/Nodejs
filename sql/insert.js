const express = require("express");
const con = require("./sql");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
        
        resp.status(200).send({ msg: "error in api", error:err}) 
    
    }


    else { 
        resp.send(result)
    
    }
  })
  app.post("/", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO users SET?", data, (error, results, fields) => {
      if (error) throw error;
      resp.send(results)
    })
  });
  
  app.put("/:id",(req,resp)=>{
    const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
    data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
   
  })

});



app.listen("5000")