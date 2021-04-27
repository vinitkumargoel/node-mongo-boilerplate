const express = require('express');
const routes = express.Router();

routes.get("/add", async (req, res, next) => {
    try {
        await res.json({status: true})
    } catch (e) {
        console.error(e);
        next();
    }
});

module.exports = routes;