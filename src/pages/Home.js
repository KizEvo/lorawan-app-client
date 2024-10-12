import React from "react"
import videoBg2 from '../assets/videoBg2.mp4'
import '../styling/Home.css'

const Home = () => {
    return(
        <section id="Home">
            <video className="home-bg" src={videoBg2} autoPlay loop muted/>
        </section>
    );
};

export default Home;