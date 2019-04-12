const express = require("express");
const mongoose = require("mongoose");

const routes = express.Router();

routes.get("/teste", (req, res) => {
    return res.send("Hello World. Javascript !");
});


module.exports = routes;