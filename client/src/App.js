
import './App.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// establishes connection from front to backend socket.io
// socket to can be used to emit or listen to socket events
const socket = io.connect("http://localhost:3001");


function App() {
  //state for message field
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived ] = useState("");



// socket io frontend function
const sendMessage = () =>{
  socket.emit("send-message", { message });                                                                                       // socket.emit();
};

//function to listen for front end changes
useEffect(() =>{
  socket.on("receive-message", (data) =>{
    setMessageReceived(data.message);
  });
}, [socket]);

  return (
    <div className="App">
      <input placeholder='Message...' 
      onChange={(event) =>{
        setMessage(event.target.value);
      }} 
      />
      <button onClick={sendMessage}>Send</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
