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
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// logSchema.pre("save", async function (next) {
//   this.date = Date.now();
// });
const logs = mongoose.model("logs", logSchema);
module.exports = logs;
