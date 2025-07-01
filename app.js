if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const Path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./Schema.js");
const listingsRoute = require("./routes/listing.js");
const reviewsRoute = require("./routes/review.js");
const userRoute = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./models/user.js");
const dbUrl=process.env.ATLASDB_URL




const store=MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter:24*3600
})

store.on("error",()=>{
  console.log("Error in Mongo Session store",err)
})

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  Cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
  },
};



app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(Path.join(__dirname, "public")));

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
app.use((req, res, next) => {
  res.locals.currUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.render("static/hero");
});

app.use("/listings", listingsRoute);
app.use("/listings/:id/reviews", reviewsRoute);
app.use("/", userRoute);

// app.get("/testlisting",async(req,res)=>{
//     let samplelisting= new Listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:12000,
//         location:"goa",
//         country:"India"
//     })
//     await samplelisting.save();
//     console.log("sample was saved")
//     res.send("successful testing")
// })

async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => {
    console.log("db connection successful");
  })
  .catch((err) => {
    console.log(`debug this error:${err}`);
  });

app.use((req, res, next) => {
  const err = new ExpressError("Page Not Found", 404);
  next(err);
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.render("error.ejs", { err });
});

let port = 3000;
app.listen(port, () => {
  console.log("server is listening");
});
