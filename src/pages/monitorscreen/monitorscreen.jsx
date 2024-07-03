import React, { useEffect, useState } from 'react';
import './monitorscreen.css';
import socket from '../../socket.js';

function Monitorscreen({ participants, close, score }) {
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		window.location.reload();
	// 	}, 10000);

	// 	return () => clearInterval(interval);
	// }, []);
	return (
		<div className='screen'>
			<div className='container-screen'>
				<div className='boxes'>
					{participants &&
						participants.map((participant, i) =>
							participant.isActive == true ? (
								<div className='box' key={i}>
									<div>
										<h3 className='participant-name'>{participant.name}</h3>
										<div className='profil-photo'>
											<img src={participant?.img} alt='' />
										</div>
									</div>
									<div className='gifts'>
										{participant.gifts.map((gift, i) => (
											<div className='gift-img' key={i}>
												<img src={gift} alt='' />
											</div>
										))}
									</div>
									<div className='score'>
										{close ? 'XXX' : participant.score}
									</div>
								</div>
							) : null
						)}
				</div>
			</div>
		</div>
	);
}

export default Monitorscreen;
