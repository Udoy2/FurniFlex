import React from 'react'
import { icon } from '../../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-black text-white ">
            <footer className="py-10">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-2">
                            <img src={icon} alt="FurniFlex Logo" width="40" />
                            <span className="text-xl font-bold">Furni<span className="text-blue-500">Flex</span></span>
                        </div>
                        <div className="flex space-x-16">
                            <div>
                                <h3 className="font-bold mb-4">About US</h3>
                                <ul className="space-y-2">
                                    <li>Master Plan</li>
                                    <li>Jobs</li>
                                    <li>Invest</li>
                                    <li>Pressroom</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Explore EEVE</h3>
                                <ul className="space-y-2">
                                    <li>Unlock my Robot Power</li>
                                    <li>Starlight</li>
                                    <li>Robot Platform</li>
                                    <li>EEVE Roadmap</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Community & Support</h3>
                                <ul className="space-y-2">
                                    <li>Willow X Community</li>
                                    <li>Developer & Maker Access</li>
                                    <li>Special Cases</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center">
                        <div className="flex space-x-4">
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookF} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white" />
                            </a>
                        </div>
                        <div className="flex space-x-6 text-gray-400">
                            <a href="#">March22 Recap</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">General Terms</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span className="fi fi-us"></span>
                            <span>United States (English)</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-gray-500">
                        EEVE © 2024. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer