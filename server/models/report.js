import mongoose from "mongoose";
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  type: { type: String, required: true },        
  severity: { type: String, enum: ["low", "moderate", "critical"], required: true },
  element: String,                                
  message: String,                                
  suggestion: String,                             
  selector: String                                
}, { _id: false });

const reportschema = new Schema({
    summary:String,
    issues: [issueSchema],
    score:{type:Number},
    timestamp: Date, 
});

export default mongoose.model("Report", reportschema);