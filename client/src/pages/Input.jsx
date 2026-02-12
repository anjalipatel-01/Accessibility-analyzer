import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import InputInfo from "../components/inputinfo";
import Infocards from "../components/infocards";

export default function Input() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    return (
        <div className="page-shell">
            <Navbar />
            <Header />
            <InputInfo />
            <div className="container" style={{ paddingBottom: "4rem" }}>
                <Infocards />
            </div>
            <Footer />
        </div>
    );
}