const express = require("express");
const ApiController = require("./../Controller/ApiController");
const router = express.Router();

router.route("/logs")
    .get(ApiController.showLogs)
    .post(ApiController.createLog)
    .delete(ApiController.cleanDB);

router.route("/log/:id")
    .get(ApiController.showLogsById);

module.exports = router;
