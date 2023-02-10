const dbconnect = require('./mongodb');

const insert =async()=>
{
    const db= await dbconnect();
    console.log(db)
    const result=db.insert([
        {name:"anubhav",brand:"hehehe"}, {name:"anubhav",brand:"hehehe"}, {name:"anubhav",brand:"hehehe"},
    ]
    


    )

    console.warn(result);
}

insert();