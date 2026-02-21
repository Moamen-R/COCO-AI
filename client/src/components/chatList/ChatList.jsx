// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Link} from "react-router";
import "./chatList.css";

const ChatList = () => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/userchats", {
                    credentials: "include",
                });

                if (res.ok) {
                    const data = await res.json();
                    setChats(data);
                }
            } catch (err) {
                console.error("Error fetching user chats:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchChats();
    }, []);

    return (
        <div className={"chatList"}>
            <span className={"title"}>DASHBOARD</span>
            <Link to="/dashboard">New Chat</Link>
            <Link to="/">Explore COCO AI</Link>
            <Link to="/dashboard">Contact</Link>
            <hr />
            <span className={"title"}>RECENT CHATS</span>
            <div className={"list"}>
                {loading
                    ? "Loading..."
                    : chats.length > 0
                        ? chats.map((chat) => (
                            <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                                {chat.title}
                            </Link>
                        ))
                        : <span className="no-chats">No chats yet</span>
                }
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
};

export default ChatList;
