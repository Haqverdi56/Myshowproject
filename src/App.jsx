import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Adminpanel from './pages/adminpanel/adminpanel';
import Monitorscreen from './pages/monitorscreen/monitorscreen';
import { useEffect, useState } from 'react';

import Increasescore from './pages/increasescore/increasescore';
import Scorex from './pages/scoreX/scorex';
import axios from 'axios';
import socket from './socket';
import Livegifts from './pages/liveGifts/livegifts';
import Duelsettings from './pages/duelsetting/duelsettings';

function App() {
	const [participants, setParticipants] = useState(null);
	const [giftData, setGiftData] = useState([]);

	async function test() {
		const response = await axios.get('http://localhost:3000/api/participants');
		setParticipants(response.data);
	}

	useEffect(() => {
		socket.on('gift', (data) => {
			// updateScore(
			// 	data.uniqueId,
			// 	data.giftId,
			// 	data.diamondCount,
			// 	data.repeatCount
			// );
			test();
			setGiftData((prevGifts) => [data, ...prevGifts]);
		});
		test();
		return () => {
			socket.off('message');
		};
	}, []);

	async function updateScore(uniqueId, giftId, count, repeatCount) {
		console.log(uniqueId, giftId, count, repeatCount);
	}
	
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/admin' element={<Adminpanel />} />
				<Route path='/livegifts' element={<Livegifts giftData={giftData} />} />
				<Route
					path='/duelsettings'
					element={<Duelsettings participants={participants}/>}
				/>
				<Route
					path='/screen'
					element={
						<Monitorscreen
							participants={participants}
							setParticipants={setParticipants}
						/>
					}
				/>
				<Route
					path='/increase'
					element={
						<Increasescore
							setParticipants={setParticipants}
							participants={participants}
							updateScore={updateScore}
						/>
					}
				/>
				<Route path='/closescore' element={<Scorex />} />
			</Routes>
		</>
	);
}

export default App;
