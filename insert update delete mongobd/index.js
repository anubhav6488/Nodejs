const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017/';
const databaseName='e-com'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('products');
    let data = await collection.find({name:"anubhav"}).toArray();
    console.log(data)


}

getData();