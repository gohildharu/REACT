import React from "react";
// // import "./Footer.css";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left Section */}
                <div className="footer-left">
                    <h2 className="footer-logo">Surat</h2>
                    <p className="footer-desc">
                        Surat is also known to be the world's largest diamond manufacturing centre, home to over 5,000 diamond manufacturing units including most advanced, large-scale diamond cutting factories in the world.
                    </p>

                    <div className="footer-contact">
                        <p> 123 surat, abc 10012</p>
                        <p> +91 12345 67891</p>
                        <p>travels@gmail.com</p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="footer-links">

                    <div className="footer-col">
                        <h4>Famous Places</h4>
                        <ul>
                            <li>Temples</li>
                            <li>Restaurant</li>
                            <li>Malls</li>
                            <li>Garden</li>
                            <li>Beaches</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;


