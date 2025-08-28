import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css' 
import spinnerImg from '../assets/loading-spinner.gif'


export function ChatInput({chatMessages,setChatMessages}) {

      const [inputText,setInputText] = useState('');

      function saveText(event){
        setInputText(event.target.value)
      }

     async function sendMessage(){
        if(inputText.trim() === "") return;
        const newChatMessages = ([
          ...chatMessages,
          {message:inputText, sender:"user", id:crypto.randomUUID()}
        ])
        setInputText('');
        setChatMessages([
            ...newChatMessages,
            {
              message: <img src={spinnerImg} className="spinner"/>,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
          ...newChatMessages ,
          {message:response, sender:"robot", id:crypto.randomUUID()}
        ]);
        
      }

       function handleKeyDown(event){
          if(event.key === "Enter"){   
            sendMessage();
          }
          else if(event.key === "Escape"){
            setInputText('');
          }
      }
     
      return (
        <div className="chat-input-container" >
          <input 
            placeholder="Send a Message to ChatBot" 
            size="30" 
            onChange={saveText}
            onKeyDown={handleKeyDown}
            value = {inputText}
            className="chatInput"
          />
          <button onClick={sendMessage} className="sendButton">Send</button>
        </div>
      )
    };
