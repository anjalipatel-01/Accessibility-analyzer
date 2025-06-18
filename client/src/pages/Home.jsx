import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/navbar';
import Header from '../components/header';
import HomeCards from '../components/homecards';
import Footer from '../components/footer';
import { Copyright,CircleUserRound,Linkedin,Github, Twitter,Bot,BadgeAlert,BookOpenCheck } from 'lucide-react';
export default function Homepage(){
    return(
        <div className='home-page'>
           <Navbar/>
           <Header/>
            <br/>

            {/* <main> 
                <div className="center-button">
                    <button>Test Your Site</button>
                </div>
            </main> */}

            <HomeCards/>
            <Footer/>
        </div>
    );
}
