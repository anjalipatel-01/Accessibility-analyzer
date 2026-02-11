import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Report.css";

export default function Reportcomp() {
  const [report, setReport] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.report) {
      setReport(location.state.report);
    } else {
      navigate("/input");
    }
  }, [location.state, navigate]);

  const getSeverityClass = (severity) => {
    const level = severity?.toLowerCase();
    if (level === "critical") return "critical";
    if (level === "moderate") return "moderate";
    if (level === "low") return "low";
    return "unknown";
  };

  return (
    <div className="report-wrapper">
      <div className="report-container">
        <div className="report-box">
          <div className="report-header">
            <div className="report-pattern" />
            <h1 className="report-title">🛡️ Accessibility Report</h1>
            <div className="report-subtitle">Generated Report</div>
          </div>

          <div className="report-content">
            <div className="report-issues">
              <h2 className="issues-title">
                <span>🔍</span> Detailed Issues
              </h2>

              <div className="issues-grid">
                {report.map((issue, index) => {
                  const severity = getSeverityClass(issue.severity);

                  return (
                    <div
                      key={index}
                      className={`issue-card issue-${severity}`}
                      style={{
                        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <div className={`issue-header header-${severity}`}>
                        <div className="issue-icon">⚠️</div>
                        <div className="issue-info">
                          <div className="issue-tags">
                            <span className="issue-type">{issue.type}</span>
                            <span className={`issue-severity severity-${severity}`}>
                              {issue.severity.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="issue-message">{issue.message}</h3>
                        </div>
                      </div>

                      <div className="issue-body">
                        <div className="issue-element">
                          <div className="element-label">🎯 Affects:</div>
                          <div className="element-code">{issue.element}</div>
                        </div>

                        <div className="issue-suggestion">
                          <div className="suggestion-label">💡 Suggestion:</div>
                          <p className="suggestion-text">{issue.suggestion}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
