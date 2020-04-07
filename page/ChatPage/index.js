import React, { useState } from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

// var welcome_state = "Welcome to my App!"
// function ChangeWelcome(){
//     welcome_state = "start with sending a message.";
//     document.querySelector("#welcome").innerText = welcome_state;
// }
const botImg = require('../../comps/Chat/chatbot.png');

const ChatPage = () => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Please Type something!");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState("#DAD");
    const [text, setText] = useState("I'm a button");

    return <div>
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat name={"User 1"} msg={msg}/>
            <p />
            <Chat img={botImg} msg={resp} name={"Chat Bot"} backgroundColor="#FAB" />
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                // if(val === "hi"){
                //     setResp("I love pie");
                // }
            }} />
        </div>
        <div id="custom_button">
            <CustomButton color={color} text={text} onClick={()=>{
                setText("I am a Robot!");
                setColor("blue");
            }} />
        </div>
    </div>
}


function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "great";

    default : 
        return "I don't understand what you are trying to say";
    }
}

ChatPage.defaultProps = {

}


export default ChatPage;