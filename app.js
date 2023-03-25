
const express = require("express");
const mongoose = require('mongoose');
const loginRoutes = require("./routes/login");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/posts");
const connect = require("./connection/connect");
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";

const app = express();

app.use("/api/v1/posts", (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        console.log(token);
        if (token) {  
            //VERIFY A TOKEN SYMMETRIC  
            
            jwt.verify(token, secret, function (err, decoded) {
                if(err){
                    return res.status(403).json({
                        status: "failed",
                        message: "Invalid token"
                    })
                }
                req.user = decoded.data;
                console.log("I am here");
                next();
            });
        } else {
            return res.status(403).json({
                status: "failed",
                message: "Invalid token"
            })
        }
    }
})


app.use("/api/v1", loginRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Ok");
});

app.listen(3500, () => console.log("The server is up at 3500 port"));