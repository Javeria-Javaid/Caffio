import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Welcome to Caffio</h1>
                <p>Experience the finest coffee with a modern, cozy touch.</p>
                <button>Explore Menu</button>
            </div>
        </section>
    );
};

export default Hero;
