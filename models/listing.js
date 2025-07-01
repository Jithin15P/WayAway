const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const Review=require("./review.js")
 

const defaultlink="https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D";
    
const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
         url:String,
         filename:String,
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    },
   reviews: [{
    type:Schema.Types.ObjectId,
    ref: "Review"
}],
owner: {
    type:Schema.Types.ObjectId,
    ref: "user"
},
 geometry: {
    type: {
      type: String,  
      enum: ['Point'],  
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }

})
const Listing= mongoose.model("Listing",listingSchema)
listingSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Review.deleteMany({ _id: { $in: doc.reviews } });
    }
});

module.exports=Listing;