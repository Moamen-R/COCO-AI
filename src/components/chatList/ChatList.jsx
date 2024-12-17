// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./chatList.css";

class ChatList extends Component {
    render() {
        return (
            <div className={"chatList"}>
                <span className={"title"}>DASHBOARD</span>
                <Link to="/dashboard">New Chat</Link>
                <Link to="/">Explore COCO AI</Link>
                <Link to="/dashboard">Contact</Link>
                <hr />
                <span className={"title"}>RECENT CHATS</span>
                <div className={"list"}>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                </div>
                <hr />
                <div className="upgrade">
                    <img src="/logo.png" alt={"logo"} width={"20px"} height={"20px"} />
                    <div className="texts">
                        <span>Upgrade to COCO AI Pro</span>
                        <span>Get unlimited access to all features</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatList;