import mongoose from "mongoose";
const Schema = mongoose.Schema;
const reportschema = new Schema({
    summary:String,
    issues: Array,
    score:Number,
    timestamp: Date, 
});

export default mongoose.model("Report", reportschema);