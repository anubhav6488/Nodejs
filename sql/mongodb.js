const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017/';
const databaseName='e-comm'
const client= new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('products');
    //let data = await collection.find({name:"anubhav"}).toArray();
    //console.log(data)


}

module.exports=dbconnect;