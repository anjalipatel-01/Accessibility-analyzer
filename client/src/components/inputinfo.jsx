export default function InputInfo(){
    return(
        <>
       <div className="container mt-5 d-flex justify-content-center">
        <div style={{ width: "60%" }}> 
            <div className="mb-4">
                <label htmlFor="htmlInput" className="form-label">Paste HTML Code</label>
                <textarea id="htmlInput" className="form-control" placeholder="<html>...</html>" rows={8} style={{ resize: "none" }}/>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-4">
                <hr className="flex-grow-1" />
                <span className="mx-3 text-muted">or</span>
                <hr className="flex-grow-1" />
            </div>
        <div>
            <label htmlFor="urlInput" className="form-label">Enter Website URL</label>
            <input id="urlInput" type="text" className="form-control" placeholder="https://example.com"/>
                </div>
            </div>
        </div>
        <div className="center-button">
            <button id="generate-report">
             Generate Report
             </button>
        </div>

        </>
    );
};