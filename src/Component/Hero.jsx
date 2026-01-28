import React from "react";
// import './App.css';
import img3 from '../Image/empty-square-lake-city-park.jpg';

const Hero = () => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${img3})` }}
        >
            <div className="hero-overlay">
                <div className="hero-content">

                    <h1>
                        Explore Dream City  <br /> Surat with Us
                    </h1>
                    <div className="rating">
                        <span>Rated 5 stars by customers</span>
                    </div>

                    <p>
                        Find the best tours at unbeatable prices with stunning
                        images and customer reviews.
                    </p>

                    <button className="hero-btn">Discover</button>
                </div>


            </div>
        </section>


    );
};

export default Hero;




