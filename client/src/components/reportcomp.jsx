import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// This component's functionality has been merged into Report.jsx
// Keeping for backward compatibility — redirects to report
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

  // Redirect to the new Report page with the data
  useEffect(() => {
    if (report.length > 0) {
      navigate("/report", { state: { report }, replace: true });
    }
  }, [report, navigate]);

  return null;
}
