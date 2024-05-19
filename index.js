const express = require("express");
const cors = require("cors"); 
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const mainRouter =require("./routes/index");


app.use("/api/v1",mainRouter)//You use app.use() to mount the router middleware (mainRouter) at the specified path "/api/v1". This means that any requests that start with /api will be passed to the router module for handling.

app.listen(3000);


