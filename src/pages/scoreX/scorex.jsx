import React, { useState } from 'react';
import './scorex.css';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

function Scorex({ setClose }) {

	const handleChange = (e) => {
		if (e.target.value == 'close') {
			setClose(true);
			console.log("true");
		} else {
			setClose(false);
			console.log('false');
		}
	};

	return (
		<div id='increase-score'>
			<div>
				<form onSubmit={(e)=>e.preventDefault()}>
					<div>
						<label>Select Participant: </label>
						<select onChange={(e) => handleChange(e)} required>
							<option value=''>Select...</option>
							<option value='open'>Aç</option>
							<option value='close'>Bağla</option>
						</select>
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

export default Scorex;
