 // eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import "./newPrompt.css";
import Upload from "../upload/Upload";
import {IKImage} from "imagekitio-react";
import model from "../../lib/gemini.js";
import Markdown from "react-markdown";

const NewPrompt = ({ chatId, chat: chatData }) => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const [img,setImg] = useState({
        isLoading:false,
        error: "",
        dbData:{},
        aiData:{}
    })

    const chat = model.startChat({
        history: chatData?.history?.map(({ role, parts }) => ({
            role,
            parts: [{ text: parts[0].text }],
        })) || [],
        generationConfig: {
            /*maxOutputTokens: 100,*/
        },
    });

    const endRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [question,answer,img.dbData]);

    const add = async (text)=> {
        setQuestion(text)

        const result = await chat.sendMessageStream(
            Object.entries(img.aiData).length ? [img.aiData,text] : [text]
        );
        let accumlatedText = '';
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            accumlatedText += chunkText;
            setAnswer(accumlatedText);
        }

        try {
            await fetch(`http://localhost:3000/api/chats/${chatId}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question: text,
                    answer: accumlatedText,
                    ...(img.dbData?.filePath && { img: img.dbData.filePath }),
                }),
            });
        } catch (err) {
            console.error("Error saving chat:", err);
        }

        setImg({isLoading:false,
            error: "",
            dbData:{},
            aiData:{}})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const text = e.target.text.value;
        if (!text) return;

        formRef.current.reset();
        await add(text)
    }

    return (
        <>
            {/* Add New Chat */}
            {img.isLoading && <div className=''>Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    width="380"
                    transformation={[{width: "380"}]}
                />
            )}

            {question && <div className='message user'>{question}</div>}
            {question && <div className='message'><Markdown>{answer}</Markdown></div>}

            <div className="endChat" ref={endRef}></div>
            <form className={"newForm"} onSubmit={handleSubmit} ref={formRef}>
                <Upload setImg={setImg} />
                <input type={"file"} id={"file"} multiple={true} hidden={true} className="fileInput"/>
                <input type="text" name="text" placeholder={"What is on your mind?"} />
                <button className={"getStarted-bt"}> {/*Input Button */}
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
        </>
    );
};

export default NewPrompt;