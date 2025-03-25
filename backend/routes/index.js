
const express = require('express');
const router = express.Router();

const userRouter = require("../models/users/user.api");
const bikeRouter = require("../models/bikes/bike.api");


router.get("/api/v1", (req, res, next) => {
    try {
        res.json({ msg: "user api is working..." })
    } catch (e) {
        next(e);

    }
})

router.use("/api/v1/users", userRouter);
router.use("api/v1/bikes", bikeRouter);

module.exports = router;