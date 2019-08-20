const express = require("express");
// const flash   =require("connect-flash");
const connectDB = require("./config/db");
const path = require("path");
// const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// app.use(cors());

app.use("/api", require("./routes/contactUs"));
app.use(function(req,res,next){
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
});

if(process.env.NODE_ENV==='production'){
	//set static folder
	app.use(express.static('client/build'));
	app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build',
	'index.html')));
}

console.log("hii");
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
