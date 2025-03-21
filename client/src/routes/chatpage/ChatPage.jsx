// eslint-disable-next-line no-unused-vars
import React from 'react';import './chatPage.css';
import NewPrompt from "../../components/newPrompt/NewPrompt.jsx";

const ChatPage = () => {

    return (
        <div className={'chatPage'}>
            <div className="wrapper">
                 <div className="chatting">
                    <div className="message">Test Message lo</div>
                    <div className="message user">Test Message</div>
                    <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto, consequatur cupiditate deleniti enim fugiat id impedit in modi obcaecati officia possimus quasi, quis sed sequi tempora ut voluptates voluptatibus?</div>
                     <div className="message user">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at consequuntur corporis dignissimos doloribus eius fugiat id magni modi natus neque, nostrum numquam quo saepe soluta suscipit tempore voluptatibus.</div>
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
                     <div className="message">Test Message</div>
                     <div className="message user">Test Message</div>
                     <div className="message">Test Message</div>
                     <div className="message user">Test Message</div>

                    <NewPrompt/>
                </div>
            </div>
        </div>
    );
};




export default ChatPage;