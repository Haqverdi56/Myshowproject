import React, { useEffect, useState } from 'react';
import './adminpanel.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Adminpanel() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const getUsername = sessionStorage.getItem('username');
		const getPassword = sessionStorage.getItem('password');
		if (!getUsername && !getPassword) {
			const authenticateUser = () => {
				const username = prompt('Enter your username:');
				const password = prompt('Enter your password:');

				if (username === 'sabir' && password === 'sabir111') {
					sessionStorage.setItem('username', username);
					sessionStorage.setItem('password', password);
					setIsAuthenticated(true);
				} else {
					alert('Invalid credentials!');
					window.location.reload(); // Doğru giriş yapılmazsa sayfayı yeniden yükleyin.
				}
			};
			authenticateUser();
		}

	}, []);

	const resetScores = async () => {
		const userConfirmed = window.confirm('Sıfırlamaq istədiyindən əminsən?');
		if (userConfirmed) {
			alert('Xallar sıfırlandı');
			try {
				const response = await axios.patch(
					'http://localhost:3000/api/reset-scores'
				);
				console.log(response.data.message);
			} catch (error) {
				console.error('Error resetting scores:', error);
				alert('Xəta!');
			}
		} else {
			// İşlemden çıkılır, herhangi bir işlem yapılmaz
			alert('Xallar sıfırlanmadı!');
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
					{/* <div className='commands'>
						<a href='#'>İştirakçı əlavə et</a>
					</div> */}
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
					{/* <div className='commands'>
						<a href='#'>İstifadəçi Ayarları</a>
					</div> */}
					<div className='commands'>
						<b>→ DİQQƏT!</b>
					</div>
					<div className='commands'>
						<a onClick={() => resetScores()} href='#'>
							Xalları Sıfırla
						</a>
					</div>
					<Link to='/'>Əsas səhifə</Link>
				</div>
			</div>
		</section>
	);
}

export default Adminpanel;
