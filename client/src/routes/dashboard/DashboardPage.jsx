// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./dashboardPage.css";

const DashboardPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;

        await fetch("http://localhost:3000/api/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text })
        });
    };

    return (
        <div className={"dashboardPage"}>
            <div className="texts">
                <div className="logo">
                    <img src="/logo.png" alt="logo" width={"50px"} height={"50px"}/>
                    <h1>COCO AI</h1>
                </div>
                <div className="options">
                    <div className="option">
                        <img src="/chat.png" alt=""/>
                        <span>Create a New Chat</span>
                    </div>
                    <div className="option">
                        <img src="/image.png" alt=""/>
                        <span>Analyze Image</span>
                    </div>
                    <div className="option">
                        <img src="/code.png" alt=""/>
                        <span>Generate Code</span>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" placeholder={"What is on your mind?"} />
                    <button className={"getStarted-btn"}>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashboardPage;
