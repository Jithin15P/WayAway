//  if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }
// const mongoose=require("mongoose");
// const initdata=require("./data.js");
// const Listing=require("../models/listing.js")
// const dbUrl=process.env.ATLASDB_URL
 


// async function main() {
//   await mongoose.connect(dbUrl);
// }
// main().then(()=>{
//     console.log("db connection successful")
// }).catch((err)=>{
//     console.log(`debug this error:${err}`)
// })

// const initDB=async()=>{
//     await Listing.deleteMany({});
//     initdata.data=initdata.data.map((obj)=>({...obj,owner:"685e91d544141e4d0159c2dd"}))
//     await Listing.insertMany(initdata.data);
//     console.log("data was saved")
// }
// initDB();