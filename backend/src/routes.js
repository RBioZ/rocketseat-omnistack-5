const express = require("express");

const routes = express.Router();

const BoxController = require('./controllers/BoxController');

//GET/ POST / PUT / DELETE

//POST
routes.post("/boxes", BoxController.store);

module.exports = routes;