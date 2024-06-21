import React from 'react';
import './adminpanel.css';
import { Link } from 'react-router-dom';

function Adminpanel() {
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
						<a href='#'>Xalları Sıfırla</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Adminpanel;
