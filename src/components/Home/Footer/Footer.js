import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Instant repairing"},
        {name: "Home delivery after repairing" },
        {name: "Product testing"},
        {name: "Fixing issues digitally" }
    ]
    const oralHealth = [
        {name: "Instant repairing"},
        {name: "Home delivery after repairing" },
        {name: "Product testing"},
        {name: "Fixing issues digitally" }
    ]
    const services = [
        {name: "Instant repairing"},
        {name: "Home delivery after repairing" },
        {name: "Product testing"},
        {name: "Fixing issues digitally" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Electronics"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Fixing issues" menuItems={oralHealth}/> 
                        <ul className="social-media list-inline text-center">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                </div>
                <div className="copyRight text-center text-secondary">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;