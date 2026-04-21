const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectionString = "mongodb://127.0.0.1:27017/rbd-construction";
const contactRoute = require("./routes/contact.router");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", ( req, res )=>{
    res.send("Server is running !..")
});

app.use("/api/contacts", contactRoute);

mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected to Database!..");
    app.listen(3000, ()=>{
        console.log("Server running in PORT Number 3000");
    });
})
.catch(()=>{
    console.log("Database Connection Lost!..");
});
