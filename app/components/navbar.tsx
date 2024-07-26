"use client";

import React, { useState } from 'react';
import './NavBar.css';
import * as dotenv from "dotenv";
dotenv.config();


export default function NavBar() {
    const [chatbots, setChatbots] = useState<string[]>([]);
    const [selectedChatbot, setSelectedChatbot] = useState<string | null>(null);
    
    function enterchatbotname() {
        const name = prompt("Enter Chat-Bot Name:");
        if (name) {
            setChatbots([...chatbots, name]);
        }
    }

    const filePath = "../../.env"

    function handleChatbotClick(name: string) {
        setSelectedChatbot(name);
        console.log(`Selected chatbot: ${name}`);
        console.log("changed to : " + process.env.MILVUS_COLLECTION)
    }

    return (
        <div id="nav-bar" style={{ left: "0px", height: "100%", borderRadius: "0", borderTopRightRadius: "16px", borderBottomRightRadius: "16px" }}>
            <input id="nav-toggle" type="checkbox" />
            <div id="nav-header">
                <a id="nav-title" href="#" target="_blank" rel="noopener noreferrer">
                Congi<i className="fab fa-codepen">Tutor</i>
                </a>
                <label htmlFor="nav-toggle">
                    <span id="nav-toggle-burger"></span>
                </label>
                <hr />
            </div>
            <div id="nav-content">
                <div style={{left:"25px"}} className="nav-button" onClick={enterchatbotname}>
                    <i className="fas fa-palette"></i><span >Add Chat-Bot</span>
                </div>
                {chatbots.map((name, index) => (
                    <div style={{left:"25px"}} key={index} className="nav-button" onClick={() => handleChatbotClick(name)}>
                        <i className="fas fa-robot"></i><span>{name}</span>
                    </div>
                ))}
                <hr />
                <div style={{left:"25px"}} className="nav-button">
                    <a href="https://cognitutorquiz.vercel.app/"><i className="fas fa-heart"></i><span>Quiz</span></a>
                </div>             
                <div id="nav-content-highlight"></div>
            </div>
            <input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar">
                        <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="avatar" />
                    </div>
                    <div id="nav-footer-titlebox">
                        <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank" rel="noopener noreferrer">
                            hachicha
                        </a>
                        <span id="nav-footer-subtitle">Admin</span>
                    </div>
                    <label htmlFor="nav-footer-toggle">
                        <i className="fas fa-caret-up"></i>
                    </label>
                </div>
                <div id="nav-footer-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    );
}
