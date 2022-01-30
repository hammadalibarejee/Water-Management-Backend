const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://hammadali:hammad123@cluster0.ga4fb.mongodb.net/users?retryWrites=true&w=majority"
  );
  console.log("Database has been connected");
} catch (err) {
  console.log(err);
}

const logSchema = new mongoose.Schema({
  status: {
    type: Number,
    operationDate: {
      type: Date,
      default: Date.now,
    },
  },
});
const logs = mongoose.model("logs", logSchema);
module.exports = logs;
