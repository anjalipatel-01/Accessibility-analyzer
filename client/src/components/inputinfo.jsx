import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code, Globe, Sparkles, Loader2 } from "lucide-react";

export default function InputInfo() {
  const [htmlInput, setHtmlInput] = useState("");
  const [htmlurl, setHtmlurl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      let payload = {};
      if (htmlInput && htmlInput.trim() !== "") {
        payload = { html: htmlInput };
      } else if (htmlurl && htmlurl.trim() !== "") {
        payload = { url: htmlurl };
      } else {
        alert("Please provide either HTML code or a URL.");
        return;
      }

      setLoading(true);
      const res = await axios.post("http://localhost:8080/api/analyze", payload, {
        withCredentials: true,
      });
      setLoading(false);
      navigate("/report", { state: { report: res.data.issues } });
    } catch (error) {
      setLoading(false);
      console.error("❌ Error while analyzing:", error);
      alert("An error occurred while analyzing. Please try again.");
    }
  };

  return (
    <div id="input-section" className="container" style={{ maxWidth: "680px", padding: "2.5rem 1.5rem" }}>
      <div className="card" style={{ padding: "2.5rem" }}>
        <div className="form-group">
          <label className="form-label" htmlFor="htmlInput">
            <Code size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />
            Paste HTML Code
          </label>
          <textarea
            id="htmlInput"
            value={htmlInput}
            placeholder="<html>...</html>"
            rows={7}
            onChange={(e) => setHtmlInput(e.target.value)}
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.85rem" }}
          />
        </div>

        <div className="divider">or</div>

        <div className="form-group">
          <label className="form-label" htmlFor="urlInput">
            <Globe size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />
            Enter Website URL
          </label>
          <div className="input-icon-wrapper">
            <Globe size={16} className="input-icon" />
            <input
              id="urlInput"
              value={htmlurl}
              type="text"
              placeholder="https://example.com"
              onChange={(e) => setHtmlurl(e.target.value)}
            />
          </div>
        </div>

        <button
          className="btn btn-primary btn-lg"
          onClick={handlesubmit}
          disabled={loading}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles size={18} />
              Generate Report
            </>
          )}
        </button>
      </div>
    </div>
  );
}
