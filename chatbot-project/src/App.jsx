import { useState, useEffect} from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessages from './components/ChatMessages'

import './App.css'

function App() {
      const [chatMessages,setChatMessages] = useState([]);
      const [darkMode, setDarkMode] =useState(false);

      useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
      }, [darkMode]);
      return(
        <div className="app-container">
          <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="sendButton"
              style={{ alignSelf: "flex-end", marginBottom: "10px" }}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          <ChatMessages
            chatMessages={chatMessages}
           />
           {chatMessages.length===0 && ( 
              <p className="welcome-message">
                Welcome to the chatbot! Send a message using the textbox below.
              </p>)}
            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      );
    }

export default App
