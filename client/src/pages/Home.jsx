import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/navbar';
import Header from '../components/header';
import HomeCards from '../components/homecards';
import Footer from '../components/footer';
import { Copyright,CircleUserRound,Linkedin,Github, Twitter,Bot,BadgeAlert,BookOpenCheck } from 'lucide-react';
export default function Home(){
    return(
        <div className='home-page'>
           <Navbar/>
           <Header/>
            <br/>
            <HomeCards/>
            <Footer/>
        </div>
    );
}
