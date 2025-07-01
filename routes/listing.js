const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../Schema.js");
const passport = require("passport");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingControllers = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//index Route & Create route
router.route("/").get(wrapAsync(listingControllers.index)).post(
  isLoggedIn,
  validateListing,
  upload.single("listing[image]"),
  wrapAsync(listingControllers.create)
);
// .post(,(req,res)=>{

//     res.send(req.file)
// })
//New route
router.get("/new", isLoggedIn, listingControllers.new);

router.route("/search").get(listingControllers.search);

// Show route ,update & delete
router
  .route("/:id")
  .get(wrapAsync(listingControllers.show))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.update)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingControllers.delete));

//Edit route
router
  .route("/:id/edit")
  .get(isLoggedIn, isOwner, wrapAsync(listingControllers.edit));

module.exports = router;
