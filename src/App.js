import './App.css';
import React, { useState } from 'react';
import Jitsi from 'react-jitsi';

// const roomName = "My meeting";
// const userName = "Dharshak";

function App() {
	const [room, setRoom] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [call, setCall] = useState(false)
	
	const handleClick = (e) => {
		e.preventDefault();
		if (room && name)
			setCall(true)
	}

	return (
		<div>
		  	{call ? (<Jitsi roomName={room} password={password} displayName={name}
				onMeetingEnd={() => console.log('Meeting has ended')}
				loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />
			) : (
			  	<form>
					<input id='room' type='text' placeholder='Room' value={room} 
						onChange={(e) => setRoom(e.target.value)} />
					<input id='name' type='text' placeholder='Name' value={name} 
						onChange={(e) => setName(e.target.value)} />
					<input id='password' type='text' placeholder='Password (optional)' value={password} 
						onChange={(e) => setPassword(e.target.value)} />
					<button onClick={handleClick} type='submit'>Start / Join</button>
			  	</form>
			)}
		</div>
	)
}

export default App;
