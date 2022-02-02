const express = require("express");
const ApiController = require("./../Controller/ApiController");
const router = express.Router();

router.route("/logs")
    .get(ApiController.showLogs)
    .post(ApiController.createLog)
    .delete(ApiController.cleanDB);

router.route("/log/:id")
    .get(ApiController.showLogsById);
router.route("/v2/logs")
    .get(ApiController.showLogsV2)
    .post(ApiController.createLogV2)
    .delete(ApiController.cleanDBV2);

router.route("/v2/log/:id")
    .get(ApiController.showLogsByIdV2)  
    .delete(ApiController.deleteByIdV2); 
module.exports = router;
