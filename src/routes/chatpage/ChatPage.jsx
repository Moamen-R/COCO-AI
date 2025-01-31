import React, {useEffect, useRef} from 'react';
import './chatPage.css';

const ChatPage = () => {

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div className={'chatPage'}>
            <div className="wrapper">
                 <div className="chatting">
                    <div className="message">Test Message lo</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message lo</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message lo</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Test Message</div>
                    <div className="message user">Test Message</div>
                    <div ref={endRef}></div>
                </div>
            </div>
        </div>
    );
};




export default ChatPage;