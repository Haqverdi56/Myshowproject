import axios from 'axios';
import React, { useState } from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './duelsettings.css';

function Duelsettings({ participants }) {
	const [selectedIds, setSelectedIds] = useState(['', '', '']);
	console.log(selectedIds);
	// async function Duel(selectedParticipant) {

	// }

	const handleIdChange = (index, value) => {
		const newIds = [...selectedIds];
		newIds[index] = value;
		setSelectedIds(newIds);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.patch('https://tiktok-show-back.onrender.com/api/set-duel', {
				ids: selectedIds,
			});
			console.log(response.data.message);
			alert('Participants updated successfully');
		} catch (error) {
			console.error('Error updating participants:', error);
			alert('Failed to update participants');
		}
		console.log(selectedIds);
	};
	return (
		<div id='duel-settings'>
			<div>
				<form onSubmit={handleSubmit}>
					{selectedIds.map((id, index) => (
						<div key={index}>
							<label>Select Participant: </label>
							<select
								value={id}
								onChange={(e) => handleIdChange(index, e.target.value)}
							>
								<option value=''>Select...</option>
								{participants?.map((participant) =>
									participant.isActive ? (
										<option key={participant._id} value={participant._id}>
											{participant.name}
										</option>
									) : null
								)}
							</select>
						</div>
					))}
					<button type='submit'>Dueli yarat!</button>
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
