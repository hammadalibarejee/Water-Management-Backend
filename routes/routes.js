const express = require("express");
const ApiController = require("./../Controller/ApiController");
const router = express.Router();

router.route("/logs")
    .get(ApiController.showLogs)
    .post(ApiController.createLog);

router.route("/log/:id")
    .get(ApiController.showLogsById);

module.exports = router;
