import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

function Footer() {
    return (
        <header>
            <div className="bg-violet text-center lg:flex lg:justify-around">

                <div>
                    <img src={logo} alt="" className="ml-32 pt-4 mb-6"/>
                </div>    

                    <div>
                        <h3 className="text-white text-xl font-bold mt-4 mb-4">Features</h3>
                            <ul className="text-gray">
                                <li>Link Shortening</li>
                                <li>Branded Links</li>
                                <li>Analytics</li>
                            </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-xl font-bold mt-4 mb-4">Resources</h3>
                            <ul className="text-gray">
                                <li>Blog</li>
                                <li>Developers</li>
                                <li>Support</li>
                            </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-xl font-bold mt-4 mb-4">Company</h3>
                            <ul className="text-gray">
                                <li>About</li>
                                <li>Our Team</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                    </div>

                    <div className="flex ml-8 p-16 justify-around">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={pinterest} alt=""/>
                        <img src={instagram} alt=""/>
                    </div>


            </div>
        </header>
    )
}

export default Footer