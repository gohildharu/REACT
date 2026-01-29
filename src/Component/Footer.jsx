import React from "react";

// import footerImg from "../Image/footer-art.png"; // use your image

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left */}
                <div className="footer-left">
                    <h2 className="footer-logo">
                        SURAT  <span>Travels</span>
                    </h2>

                    <p>
                        Premier Manufacturer Of Top-Quality Coated Fabrics.
                        Unmatched Precision Through Full Integration.
                    </p>

                    <div className="social-icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <ul>
                        <li>Home</li>
                        <li>Destination</li>
                        <li>Special Food</li>
                        <li>Blog</li>
                        <li>Contact</li>

                    </ul>

                </div>

                {/* Image */}
                {/* <div className="footer-image">
          <img src={footerImg} alt="Nature Art" />
        </div> */}

                {/* Contact */}
                <div className="footer-contact">
                    <h3>Contact Info</h3>

                    <p>📍 E-105 Surat, Gujarat 395007</p>
                    <p>📞 +91 90786 96850</p>
                    <p>✉️ travels@gmail.com</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

