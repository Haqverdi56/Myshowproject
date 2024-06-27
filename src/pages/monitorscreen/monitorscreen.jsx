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
								<div
									className={participant.photoActive ? 'box' : 'final'}
									key={i}
								>
									<div>
										<h3
											className='participant-name'
											style={
												!participant.photoActive
													? { fontSize: '8rem', color: 'gold' }
													: null
											}
										>
											{participant.name}
										</h3>
										{participant.photoActive ? (
											<div className='profil-photo'>
												<img src={participant?.img} alt='' />
											</div>
										) : null}
									</div>
									<div className='gifts'>
										{participant.gifts.map((gift, i) => (
											<div className='gift-img' key={i}>
												<img src={gift} alt='' />
											</div>
										))}
									</div>
									{participant.photoActive ? (
										<div className='score'>
											{close ? 'XXX' : participant.score}
										</div>
									) : null}
								</div>
							) : null
						)}
				</div>
			</div>
		</div>
	);
}

export default Monitorscreen;
