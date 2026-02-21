// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import './chatPage.css';
import NewPrompt from "../../components/newPrompt/NewPrompt.jsx";
import {useParams} from "react-router";
import {IKImage} from "imagekitio-react";
import Markdown from "react-markdown";

const ChatPage = () => {
    const { id } = useParams();
    const [chat, setChat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChat = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/chats/${id}`, {
                    credentials: "include",
                });

                if (res.ok) {
                    const data = await res.json();
                    setChat(data);
                }
            } catch (err) {
                console.error("Error fetching chat:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchChat();
    }, [id]);

    return (
        <div className={'chatPage'}>
            <div className="wrapper">
                 <div className="chatting">
                    {loading
                        ? "Loading..."
                        : chat?.history?.map((message, i) => (
                            <React.Fragment key={i}>
                                {message.img && (
                                    <IKImage
                                        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                                        path={message.img}
                                        width="380"
                                        transformation={[{width: "380"}]}
                                    />
                                )}
                                <div className={`message ${message.role === "user" ? "user" : ""}`}>
                                    <Markdown>{message.parts[0].text}</Markdown>
                                </div>
                            </React.Fragment>
                        ))
                    }
                    {chat && <NewPrompt chatId={id} chat={chat} />}
                </div>
            </div>
        </div>
    );
};

export default ChatPage;