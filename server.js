const express = require("express");
const flash   =require("connect-flash");
const connectDB = require("./config/db");
//const path = require("path");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api", require("./routes/contactUs"));
app.use(function(req,res,next){
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
});

console.log("hii");
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
