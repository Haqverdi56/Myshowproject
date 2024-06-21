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
	const [close, setClose] = useState(() => {
		const savedClose = localStorage.getItem('close');
		return savedClose === 'true';
	});
	const [participants, setParticipants] = useState(null);
	const [giftData, setGiftData] = useState(null);

	// participants?.sort((a, b) => b.score - a.score)
	useEffect(() => {
		async function test() {
			const response = await axios.get(
				'http://localhost:3000/api/participants'
			);
			setParticipants(response.data);
			socket.on('gift', (data) => {
				updateScore(
					data.uniqueId,
					data.giftId,
					data.diamondCount,
					data.repeatCount,
					response.data
				);
				setGiftData(data);
			});
		}
		test();
		return () => {
			socket.off('message');
		};
	}, []);

	useEffect(() => {
		localStorage.setItem('close', close);
	}, [close]);

	async function updateScore(uniqueId, giftId, count, repeatCount, a) {
		console.log(uniqueId, giftId, count, repeatCount);
		// const response = await axios.get('http://localhost:3000/api/participants');

		const participantToUpdate = a.find((participant) =>
			participant.giftId.includes(giftId)
		);
		// console.log(participants);

		try {
			if (participantToUpdate) {
				await axios.patch(
					`http://localhost:3000/api/participants/${participantToUpdate?._id}`,
					{
						score: count * repeatCount,
					}
				);
				console.log(participantToUpdate.name);
			}
			const updatedParticipant = response.data;

			setParticipants((prevParticipants) =>
				prevParticipants.map((participant) =>
					participant.uniqueId === uniqueId
						? { ...participant, score: updatedParticipant.score }
						: participant
				)
			);
		} catch (error) {
			// console.log('Error updating score:', error.message);
		}
	}

	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/admin' element={<Adminpanel />} />
				<Route path='/livegifts' element={<Livegifts giftData={giftData} />} />
				<Route path='/duelsettings' element={<Duelsettings participants={participants} />} />
				<Route
					path='/screen'
					element={
						<Monitorscreen
							participants={participants}
							setParticipants={setParticipants}
							updateScore={updateScore}
							close={close}
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
				<Route path='/closescore' element={<Scorex setClose={setClose} />} />
			</Routes>
		</>
	);
}

export default App;
