import axios from "axios";
import { useState } from "react";

export default function InputInfo(){
    const [htmlInput, setHtmlInput] = useState("");
    const [htmlurl,setHtmlurl] = useState("");
    const [report,setReport] = useState(null);

    const handlesubmit = async (e)=>{
        try{
            let payload = {};
            if(htmlInput && htmlInput.trim() !== ""){
                payload = {html:htmlInput};
            }else if(htmlurl && htmlurl.trim() !== ""){
                payload = {url:htmlurl};
            }else{
                console.log("❌ Both inputs are empty!");
                return;
            }

            const res = await axios.post("http://localhost:8080/api/analyze",payload);
            setReport(res.data);
        }catch(error){
            console.error("❌ Error while analyzing:", error);
        }

    }
    return(
        <>
       <div className="container mt-5 d-flex justify-content-center">
        <div style={{ width: "60%" }}> 
            <div className="mb-4">
                <label htmlFor="htmlInput" className="form-label">Paste HTML Code</label>
                <textarea id="htmlInput" value={htmlInput} className="form-control" placeholder="<html>...</html>" rows={8} style={{ resize: "none" }} onChange={(e) => setHtmlInput(e.target.value)}/>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-4">
                <hr className="flex-grow-1" />
                <span className="mx-3 text-muted">or</span>
                <hr className="flex-grow-1" />
            </div>
        <div>
            <label htmlFor="urlInput" className="form-label">Enter Website URL</label>
            <input id="urlInput" value={htmlurl} type="text" className="form-control" placeholder="https://example.com" onChange={(e)=>setHtmlurl(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className="center-button">
            <button id="generate-report" onClick={handlesubmit}>
             Generate Report
             </button>
        </div>

        </>
    );
};