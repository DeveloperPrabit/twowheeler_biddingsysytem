const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.post("/register", async (req, res, next) => {
    try {
        const result = await userController.create(req.body);
        res.json({ msg: "user register successfully...", data: result });
    } catch (e) {
        next(e);

    }
})

router.post("/login", async (req, res, next) => {
    try {
        const result = await userController.login(req.body)
        res.json({ msg: "user login successfully...", data: result })
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