const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError");
const {listingSchema,reviewSchema}=require("../Schema.js");
const Listing=require("../models/listing.js")
const Review=require("../models/review.js")
const {validateReview}=require("../middleware.js")
const {isLoggedIn,isReviewAuthor}=require("../middleware.js")
const reviewController=require("../controllers/review.js")

//Review Route
router.post("/",
        isLoggedIn,
        wrapAsync(reviewController.review))

//Delete Review
router.delete("/:reviewId",
        isLoggedIn,isReviewAuthor,
        wrapAsync(reviewController.delete))

module.exports=router