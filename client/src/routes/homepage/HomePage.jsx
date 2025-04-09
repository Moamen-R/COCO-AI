
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './homePage.css';
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
    const test = async () =>{
        await fetch("http://localhost:3000/api/test",)
    }
    return (
        <div className="homepage">
            <img src="/circle.png" alt="" className="orbital"/>
            <div className="left">
                <h1>COCO AI</h1>
                <h2>Super <span>Charge</span> Your Productivity</h2>
                <h3>With the most powerful free and new AI models with easy access</h3>
                <Link to="/dashboard" className="GStartedBtn">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="currentColor"
                            ></path>
                    </svg>
                    <span>Get Started</span>
                </Link>
                <button onClick={test}>Test</button>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot2.png" alt="" className="bot"/>
                    <div className="chat">
                        <img src="/bot3.png" alt="" className="chatIcon"/>
                        <TypeAnimation
                            sequence={[
                                "How are you!",
                                1000,
                                "I'm COCO, Your personal AI platform.",
                                2000,
                                "I'm not a model for now",
                                1000,
                                "But I'll provide you with the best AI models.",
                                2000,
                                "Let's check what I have? ",
                                3000,
                                () => {
                                    console.log('Sequence completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                        />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/logo.png" alt="" className="btn-logo "/>
                <div className="links">
                    <Link to="/">Terms and Conditions</Link>

                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
