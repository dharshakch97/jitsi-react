import './App.css';
import React from 'react';
import Jitsi from 'react-jitsi';

const roomName = "My meeting";
const userName = "Dharshak";

function App() {
  return (
    <div className="App">
		<h1>Jitsi Meeting</h1>
		<Jitsi roomName={roomName} displayName={userName} />
    </div>
  );
}

export default App;
