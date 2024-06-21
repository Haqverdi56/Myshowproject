import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Homepage() {
	async function disconnectLive() {
		try {
			console.log('Salam');
			const response = await axios.post('http://localhost:3000/api/disconnect');
			console.log(response);
			console.log('TikTok canlı bağlantısı kapatıldı');
		} catch (error) {
			console.log('Sağol');
			console.error('TikTok canlı bağlantısını kapatma hatası:', error);
		}
	}
	return (
		<div className='show'>
			<div id='connect-info'>
				<p>Qoşulma Uğursuz!</p>
			</div>
			<div id='signin-socket-inputs'>
				<div>
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
				</div>
			</div>
			<div className='buttons'>
				<div className='button-div'>
					<button>Program start</button>
				</div>
				<div className='button-div stop'>
					<button onClick={() => disconnectLive()}>Program stop</button>
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
