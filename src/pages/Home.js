import React from "react"
import videoBg from '../assets/videoBg.mp4'
import '../styling/Home.css'

const Home = () => {
    return(
        <section id="Home">
            <video src={videoBg} autoPlay loop muted/>
        </section>
    );
};

export default Home;