import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Filter } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Report() {
    const [report, setReport] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
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

    const filteredReport =
        activeFilter === "all"
            ? report
            : report.filter(
                (issue) => getSeverityClass(issue.severity) === activeFilter
            );

    const counts = {
        total: report.length,
        critical: report.filter((i) => getSeverityClass(i.severity) === "critical").length,
        moderate: report.filter((i) => getSeverityClass(i.severity) === "moderate").length,
        low: report.filter((i) => getSeverityClass(i.severity) === "low").length,
    };

    return (
        <div className="page-shell report-page">
            <Navbar />
            <main style={{ flex: 1 }}>
                {/* Report header */}
                <section className="hero-sub" style={{ padding: "3rem 1.5rem 2.5rem" }}>
                    <div className="container">
                        <div className="hero-content animate-fade-in" style={{ textAlign: "left" }}>
                            <Link
                                to="/input"
                                className="btn btn-ghost"
                                style={{ color: "var(--text-on-dark-muted)", marginBottom: "0.75rem", padding: "0.25rem 0" }}
                            >
                                <ArrowLeft size={16} /> Back to Analyzer
                            </Link>
                            <h1 className="hero-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                                🛡️ Accessibility <span className="gradient-text">Report</span>
                            </h1>
                        </div>
                    </div>
                </section>

                <div className="container section" style={{ paddingTop: "2rem" }}>
                    {/* Summary stats */}
                    <div className="report-summary animate-fade-in">
                        <div className="report-stat">
                            <div className="stat-num" style={{ color: "var(--text-primary)" }}>{counts.total}</div>
                            <div className="stat-lbl">Total Issues</div>
                        </div>
                        <div className="report-stat">
                            <div className="stat-num" style={{ color: "var(--error)" }}>{counts.critical}</div>
                            <div className="stat-lbl">Critical</div>
                        </div>
                        <div className="report-stat">
                            <div className="stat-num" style={{ color: "var(--warning)" }}>{counts.moderate}</div>
                            <div className="stat-lbl">Moderate</div>
                        </div>
                        <div className="report-stat">
                            <div className="stat-num" style={{ color: "var(--info)" }}>{counts.low}</div>
                            <div className="stat-lbl">Low</div>
                        </div>
                    </div>

                    {/* Filter pills */}
                    <div className="report-filters animate-fade-in">
                        <Filter size={16} style={{ color: "var(--text-muted)", marginRight: "0.25rem" }} />
                        {["all", "critical", "moderate", "low"].map((f) => (
                            <button
                                key={f}
                                className={`filter-pill${activeFilter === f ? " active" : ""}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f.charAt(0).toUpperCase() + f.slice(1)}
                                {f !== "all" && ` (${counts[f]})`}
                            </button>
                        ))}
                    </div>

                    {/* Issue cards */}
                    <div className="issues-grid">
                        {filteredReport.map((issue, index) => {
                            const severity = getSeverityClass(issue.severity);
                            return (
                                <div
                                    key={index}
                                    className={`issue-card issue-${severity} animate-fade-in`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className={`issue-header header-${severity}`}>
                                        <div className="issue-icon">
                                            <AlertTriangle size={18} />
                                        </div>
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
                                            <div className="element-label">🎯 Affects</div>
                                            <div className="element-code">{issue.element}</div>
                                        </div>
                                        <div className="issue-suggestion">
                                            <div className="suggestion-label">💡 Suggestion</div>
                                            <p className="suggestion-text">{issue.suggestion}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredReport.length === 0 && (
                        <div className="flex-center" style={{ padding: "3rem", color: "var(--text-muted)" }}>
                            No issues found for this filter.
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}