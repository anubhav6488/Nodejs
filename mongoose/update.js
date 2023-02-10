const dbconnect = require('./mongodb')

const updatedata=async()=>{

    let data=await dbconnect();
    let result= await data.update( 
        { name:'anubhav' },{
            
            $set:{name:'apple',brand:'poko',price:1}}


    );

    console.warn(result)


}

updatedata();