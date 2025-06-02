const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reportschema = new Schema({
    summary:String,
    issues: Array,
    score:Number,
    timestamp: Date, 
});
module.exports = mongoose.model("Report",reportschema);