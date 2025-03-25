const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {
    try {
        res.json({ msg: "user register successfully..." })
    } catch (e) {
        next(e);

    }
})

router.post("/login", async (req, res, next) => {
    try {
        res.json({ msg: "user login successfully..." })
    } catch (e) {
        next(e);

    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        res.json({ msg: "user delete successfully.." })
    } catch (e) {
        next(e);

    }
})


module.exports = router;