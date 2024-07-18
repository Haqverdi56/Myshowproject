import React from 'react';
import './adminpanel.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Adminpanel() {
	const resetScores = async () => {
		try {
			const response = await axios.patch(
				'http://localhost:3000/api/reset-scores'
			);
			console.log(response.data.message);
			alert('All scores have been reset to 0');
		} catch (error) {
			console.error('Error resetting scores:', error);
			alert('Failed to reset scores');
		}
	};
	return (
		<section id='admin-panel'>
			<div className='container'>
				<div className='head-admin-panel'>
					<h3>Admin Panel</h3>
				</div>
				<div className='settings'>
					<div className='commands'>
						<a href='#'>Canlı Səsvermə</a>
					</div>
					<div className='commands'>
						<Link to='/livegifts'>Canlı Hədiyyələr</Link>
					</div>
					<div className='commands'>
						<a href='#'>İştirakçı əlavə et</a>
					</div>
					<div className='commands'>
						<b>→ Ayarlar</b>
					</div>
					<div className='commands'>
						<Link to='/increase'>Səslər (Artır / Azalt)</Link>
					</div>
					<div className='commands'>
						<Link to='/closescore'>Səslər (Aç / Bağla)</Link>
					</div>
					<div className='commands'>
						<Link to='/duelsettings'>Duel Ayarları</Link>
					</div>
					<div className='commands'>
						<a href='#'>İstiifadəçi Ayarları</a>
					</div>
					<div className='commands'>
						<b>→ DİQQƏT!</b>
					</div>
					<div className='commands'>
						<a onClick={() => resetScores()} href='#'>
							Xalları Sıfırla
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Adminpanel;
