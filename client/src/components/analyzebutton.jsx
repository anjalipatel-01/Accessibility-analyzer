import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function AnalyzeButton() {
  const navigate = useNavigate();
  const gotoInput = () => {
    navigate("/input#input-section");
  };

  return (
    <div className="flex-center" style={{ margin: "2.5rem 0" }}>
      <button className="btn btn-glow" onClick={gotoInput}>
        <Sparkles size={20} />
        Analyze Website
      </button>
    </div>
  );
}