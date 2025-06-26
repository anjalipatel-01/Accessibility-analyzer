import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Compnayhero from "../components/companyhero";

export default function Company(){
    return(
        <div className="navlink-container">
            <Navbar/>
            <Compnayhero/>
            <Footer/>
        </div>
    )
}