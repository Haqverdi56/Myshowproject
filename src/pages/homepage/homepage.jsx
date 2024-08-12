import React, { useEffect, useState } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Homepage() {
	const [connected, setConnected] = useState(() => {
		const storedValue = localStorage.getItem('connected');
		return storedValue === 'true';
	});

	useEffect(() => {
		localStorage.setItem('connected', connected);
	}, [connected]);

	async function startShow() {
		try {
			const response = await axios.post('https://tiktok-show-back.onrender.com/api/connect');
			console.log(response.data);
			setConnected(true);
			response.data !== true ? setConnected(false) : null
		} catch (error) {
			console.error('Başlatma hatası:', error);
			setConnected(false);
		}
	}
	async function disconnectLive() {
		try {
			const response = await axios.post('https://tiktok-show-back.onrender.com/api/disconnect');
			console.log(response.data);
			setConnected(false);
		} catch (error) {
			console.error('TikTok canlı bağlantısını kapatma hatası:', error);
		}
	}

	return (
		<div className='show'>
			<div
				id='connect-info'
				style={
					connected ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
				}
			>
				<p>{connected ? 'Qoşulma Uğurlu!' : 'Qoşulma Uğursuz!'}</p>
			</div>
			<div id='signin-socket-inputs'>
				{/* <div>
					<input
						type='text'
						name='pageName'
						id='pageName'
						autoComplete='off'
						placeholder='Səhifə adı'
					/>
				</div>
				<div>
					<input
						type='password'
						name='password'
						id='password'
						autoComplete='off'
						placeholder='Parol'
					/>
				</div> */}
			</div>
			<div className='buttons'>
				<div className='button-div'>
					<button className='start-button' onClick={() => startShow()}>
						Başla
					</button>
				</div>
				<div className='button-div stop'>
					<button onClick={() => disconnectLive()}>Stop ver</button>
				</div>
				<div className='button-div'>
					<Link to='/admin'>Admin Giriş</Link>
				</div>
				<div className='button-div'>
					<Link to='/screen'>Monitor ekranı</Link>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
