import React, { useEffect, useState } from 'react';
import './increasescore.css';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import axios from 'axios';

function Increasescore({ participants }) {
	const [selectedNameId, setSelectedNameId] = useState('');
	const [count, setCount] = useState(0);

	async function newScore(selectedParticipant) {
		// console.log(selectedParticipant);
		const response = await axios.patch(
			`http://localhost:3000/api/participants/${selectedParticipant._id}`,
			{
				giftId: selectedParticipant.giftId[0],
				gifts: selectedParticipant.gifts,
				img: selectedParticipant.img,
				name: selectedParticipant.name,
				score: count,
			}
		);
		console.log(response.data);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const selectedParticipant = participants.find(
			(participant) => participant._id === selectedNameId
		);

		if (selectedParticipant) {
			// updateScore(selectedParticipant.giftId[0], count, 1);
			newScore(selectedParticipant);
			// console.log('Score güncellendi:');
		}

		setSelectedNameId('');
		setCount('');
	};
	return (
		<div id='increase-score'>
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Select Participant: </label>
						<select
							value={selectedNameId}
							onChange={(e) => setSelectedNameId(e.target.value)}
							required
						>
							<option value=''>Select...</option>
							{participants?.map((participant) =>
								participant.isActive == true ? (
									<option key={participant.name} value={participant._id}>
										{participant.name}
									</option>
								) : null
							)}
						</select>
					</div>
					<div>
						<label>Count: </label>
						<input
							type='number'
							value={count}
							onChange={(e) => setCount(e.target.value)}
							required
						/>
					</div>
					<button type='submit'>Səsi dəyiş</button>
				</form>
				<div className='back-admin'>
					<Link className='back' to='/admin'>
						Geri qayıt
						<RiArrowGoBackLine />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Increasescore;
