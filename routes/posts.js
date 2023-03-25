const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

// CREATE ALL THE POST

router.post("/posts", async (req, res) => {
    const posts = await Post.create({
        title: req.body.title,
        description: req.body.description,
        creator: req.body.creator,
        price: req.body.price,
        creation_date: req.body.creation_date,
        last_update_date: req.body.last_update_date,
        tags: req.body.tags,
        user: req.user
    });
    res.json({
        status: "Sucess",
        posts

    })
});

//  READ ALL THE POST

router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: "Sucess",
            data: posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

//  READ POSTS USING ID 

router.get("/posts/:id", async (req, res) => {
    try {
        const posts = await User.find({ _id: req.params.id });
        res.status(200).json({
            status: "Sucess",
            data: posts
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
        const posts = await User.create(req.body);

        res.status(200).json({
            status: "Sucess",
            posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

//  UUPDATE THE DATA USING ID 

router.put("/users/:id", async (req, res) => {
    try {
       
        console.log(req.params);
        const posts = await Post.updateOne({ _id: req.params.id }, req.body);

        res.status(200).json({
            status: "Sucess",
            posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// DELETE THE DATA USING ID 

router.delete("/posts/:id", async (req, res) => {
    try {
        const posts = await Post.deleteOne({ _id: req.params.id });

        res.status(200).json({
            status: "Sucess",
            posts
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