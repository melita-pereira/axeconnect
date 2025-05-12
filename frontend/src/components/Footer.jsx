import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-col">
                    <img src="../assets/logo.png" alt="AxeConnect Logo" className="footer-logo" />
                    <div className="social-icons">
                        <span><img src="../assets/x.png" alt="X" className="footer-x" /></span>
                        <span><img src="../assets/instagram.png" alt="Instagram" className="footer-instagram" /></span>
                        <span><img src="../assets/youtube.png" alt="YouTube" className="footer-youtube" /></span>
                        <span><img src="../assets/linkedin.png" alt="LinkedIn" className="footer-linkedin" /></span>
                    </div>
                </div>
                
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>Email</p>
                </div>

                <div className="footer-col">
                    <h4>Resources</h4>
                    <ul>
                        <li>Acadia University</li>
                        <li>ASU</li>
                        <li>Colleague Acadia</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
            
            <p className="footer-note">
            © 2025 AxeConnect.
            Some images and graphics included belong to their respective owners and AxeConnect does not claim any right over them.
            </p>
        </footer>
    );
}

export default Footer;