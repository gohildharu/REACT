import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Surat</h1>
        <p>
          Surat is one of the fastest-growing cities in India, famous for
          diamonds, textiles, and bridges.
        </p>
      </div>

      {/* Content Section */}
      <div className="about-container">
        <h2>Surat is Famous For</h2>

        <div className="about-grid">
          {/* Diamond City */}
          <div className="about-card">
            <h3>💎 Diamond City</h3>
            <p>
              Surat is also known to be the world's largest diamond
              manufacturing centre, home to over 5,000 diamond manufacturing 
              units including most advanced, large-scale
              diamond cutting factories in the world.
            </p>
          </div>

          {/* Bridge City */}
          <div className="about-card">
            <h3>🌉 Bridge City</h3>
            <p>
              Surat is known as the Bridge City of Gujarat. It has over 120
              bridges. One of the latest bridges is built on river Tapi and
              connects Ved and Variyav areas. This four-lane bridge is 1.50 km
              long and cost around Rs. 118.42 crore.
            </p>
          </div>

          {/* Textile City */}
          <div className="about-card">
            <h3>🧵 Textile City</h3>
            <p>
              Surat is also called the Silk City. The textile industry is huge
              with nearly five lakhs of powerlooms. Surat produces about two
              crore meters of grey textile daily. Many dyeing and printing units
              are located in Pandesara, Sachin, Kadodara, and Palsana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


