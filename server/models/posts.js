const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  published_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
