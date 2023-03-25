const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/users");

router.use(bodyParser.json());

// READ ALL THE DATA 

router.get("/users", async (req, res) => {
    try {
    
        const users = await User.find();
        res.status(200).json({
            status: "Sucess",
            data: users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// READ SPECIFIC DESIGNS BASED ON TAGS 

router.get("/users/:tags", async (req, res) => {
    try {

        const users = await User.find({_tags: req.params.tags});
        res.status(200).json({
            status: "Sucess",
            data: users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// READ SPECIFIC DESIGNS BASED ON TITLES 

router.get("/users/:titles", async (req, res) => {
    try {

        const users = await User.find({_titles: req.params.titles});
        res.status(200).json({
            status: "Sucess",
            data: users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// READ SPECIFIC DESIGNS BASED ON DESCRIPTIONS

router.get("/users/:descriptions", async (req, res) => {
    try {
        const users = await User.find({_descriptions: req.params.descriptions});
        res.status(200).json({
            status: "Sucess",
            data: users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});


// CREATE THE DATA 

router.post("/users", async (req, res) => {
    try {
        const users = await User.create(req.body);

        res.status(200).json({
            status: "Sucess",
            users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// UPDATE THE DATA 

router.put("/users/:id", async (req, res) => {
    try {
        console.log(req.params);
        const users = await User.updateOne({_id: req.params.id}, req.body);

        res.status(200).json({
            status: "Sucess",
            users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

//  DELETE THE DATA

router.delete("/users/:id", async (req, res) => {
    try {
        const users = await User.deleteOne({_id : req.params.id});

        res.status(200).json({
            status: "Sucess",
            users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.get("*", (req, res) => {
    res.status(404).json({
        status: "failed",
        message: "Invalid request"
    })
});

module.exports = router;