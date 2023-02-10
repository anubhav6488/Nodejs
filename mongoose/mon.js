const { application } = require('express');
const mongoose=require('mongoose');


const main=async()=>{
await mongoose.connect("mongodb://0.0.0.0:27017/e-com");

const productSchema=new mongoose.Schema({

name:String

});

const productModel=mongoose.model('products',productSchema);

let data=new productModel({name:"m8"});
let result=await data.save();
console.log(result);
const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
deleteInDB();
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'max pro 611'})
    console.log(data);

}
findInDB();


}





