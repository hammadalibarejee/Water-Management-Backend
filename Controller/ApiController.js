require("dotenv").config();
const mongoose = require("mongoose");
const logs = require("./../Model/model");

exports.showLogs = async (req, res) => {
  let result = await logs.find();
  if (!result) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  res.status(200).json({
    message: "Success",
    data: {
      result,
    },
  });
};
exports.showLogsById = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(400).json({
      message: "Kindly give the ID",
    });
  }
  let result = await logs.findOne({ _id: id });
  if (!result) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  res.status(200).json({
    message: "Success",
    data: {
      result,
    },
  });
};
exports.createLog = async (req, res) => {
  if (!req.body.status) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }
  let newLog = new logs(req.body);
  let result = await newLog.save();
  if (!result) {
    return res.status(500).json({
      message: "Error while creating the logs",
    });
  }
  res.status(200).json({
    message: "Created Successfully",
    data: {
      result,
    },
  });
};
