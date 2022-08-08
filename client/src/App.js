
import './App.css';
import { useEffect } from 'react';
import io from 'socket.io-client';

// establishes connection from front to backend socket.io
// socket to can be used to emit or listen to socket events
const socket = io.connect("http://localhost:3001");


function App() {
// socket io frontend function
const sendMessage = () =>{
  socket.emit("send-message", { message: "Hello"});                                                                                       // socket.emit();
};

//function to listen for front end changes
useEffect(() =>{
  socket.on("receive-message", (data) =>{
    alert(data.message);
  })
}, [socket]);

  return (
    <div className="App">
      <input placeholder='Message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
