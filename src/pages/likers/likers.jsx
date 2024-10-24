import React, { useEffect, useState } from 'react';
import './liker.css';
import axios from 'axios';

function Likers() {
	const [likers, setLikers] = useState(null);
	async function getAllLikers() {
		const response = await axios.get('https://tiktok-show-back.onrender.com/api/showlikers');
		console.log(response.data);
		setLikers(response.data);
	}

	useEffect(() => {
		getAllLikers();
	}, []);

	return (
		<>
			<div id='likers'>
				{likers &&
					likers
						.sort((a, b) => b.totalLikes - a.totalLikes)
						.map((data, i) => (
							<div key={i} className='likers-box'>
								<div className='likers-img'>
									<img src={data.profilePictureUrl} alt='' />
								</div>
								{/* <p>{data.uniqueId}</p> */}
								<p>{data.nickname}</p>
								<p className='like-count'>{data.totalLikes}</p>
							</div>
						))}
			</div>
		</>
	);
}

export default Likers;
