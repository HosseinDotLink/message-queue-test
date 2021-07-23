const express = require("express"),
    router = express.Router(),
    {
        add
    } = require("../../controllers/user");


router.post(
    "/add",
    add
);

module.exports = router;