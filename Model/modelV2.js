const mongoose = require("mongoose");

const logSchemaV2 = new mongoose.Schema({
  status: {
    type: String,
    // required: [true, 'Status must be defined']
  },
  time:{
    type:String,
    // required: [true, 'Time must be defined']
  },
  date: {
    type: String,
    // required: [true, 'Date must be defined']
  },
});

// logSchema.pre("save", async function (next) {
//   this.date = Date.now();
// });
const logsV2 = mongoose.model("logsV2", logSchemaV2);
module.exports = logsV2;
