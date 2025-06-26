import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import InputInfo from "../components/inputinfo";
import Infocards from "../components/infocards";
import  "../styles/Input.css";

export default function Input(){
    return(
        <div className="input-container">
        <Navbar/>
        <Header/>
        <InputInfo/>
        <Infocards/>
        <Footer/>
        </div>
    )
}