import { useNavigate } from "react-router-dom";
export default function AnalyzeButton(){
  const navigate = useNavigate();
  const gotoInput = ()=>{
      navigate("/input");
  }
    return(
        <main>
        <div className="center-button">
          <button onClick={gotoInput}>Analyze</button>
        </div>
      </main>
    );
};