import axios from 'axios';
import React, { useState } from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './duelsettings.css';

function Duelsettings({ participants }) {
	console.log(participants);
	const [selectedNameId, setSelectedNameId] = useState('');
	const [count, setCount] = useState(0);

	async function Duel(selectedParticipant) {
        
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const selectedParticipant = participants.find(
			(participant) => participant._id === selectedNameId
		);

		if (selectedParticipant) {
			Duel(selectedParticipant);
		}

		setSelectedNameId('');
		setCount('');
	};
	return (
		<div id='duel-settings'>
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

export default Duelsettings;
