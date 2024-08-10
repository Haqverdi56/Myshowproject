import React, { useEffect, useState } from 'react';
import './monitorscreen.css';
import socket from '../../socket.js';

function Monitorscreen({ participants }) {
	const [duel, setDuel] = useState(false);
	const [close, setClose] = useState(false);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		window.location.reload();
	// 	}, 10000);

	// 	return () => clearInterval(interval);
	// }, []);
	useEffect(() => {
		const as = participants?.some((participant) => participant.duel !== 0 );
		as ? setDuel(true) : setDuel(false);

		participants?.forEach(element => {
			element.scoreX == true ? setClose(true) : setClose(false)
		});
	}, [participants]);
	if (close == false) {
		participants?.sort((a, b) => b.score - a.score);
	}

	return (
		<div className='screen'>
			<div className='container-screen'>
				{!duel ? (
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
				) : (
					<div className='boxes'>
						{participants &&
							participants
								.sort((a, b) => a.duel - b.duel)
								.map((participant, i) =>
									participant.duel !== 0 ? (
										<div className='box' key={i}>
											<div>
												<h3 className='participant-name'>{participant.name}</h3>
												<div className='profil-photo'>
													<img src={participant?.img} alt='' />
												</div>
											</div>
											<div className='gifts'>
												{participant.gifts.map((gift, i) => (
													<div key={i}>
														<div className='gift-img' key={i}>
															<img src={gift} alt='' />
														</div>
													</div>
												))}
												{participant.duel == 1 ? (
													<div className='gift-img'>
														<img //6646*4888
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a7748baba012c9e2d98a30dce7cc5a27~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 1 ? (
													<div className='gift-img'>
														<img //8916*9699
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/6958244f3eeb69ce754f735b5833a4aa.png~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 1 ? (
													<div className='gift-img'>
														<img //6369*29999
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4fb89af2082a290b37d704e20f4fe729~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 2 ? (
													<div className='gift-img'>
														<img //6646*4888
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/002d5e13fd6cd18b7574b43dc4fd13ae.png~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 2 ? (
													<div className='gift-img'>
														<img //6149*10000
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8520d47b59c202a4534c1560a355ae06~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 2 ? (
													<div className='gift-img'>
														<img //9072*44999
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8f471afbcebfda3841a6cc515e381f58~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 3 ? (
													<div className='gift-img'>
														<img //5767*4888
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/921c6084acaa2339792052058cbd3fd3~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 3 ? (
													<div className='gift-img'>
														<img //6203*10000
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/df63eee488dc0994f6f5cb2e65f2ae49~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
												{participant.duel == 3 ? (
													<div className='gift-img'>
														<img //8563*29999
															src='https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4caa9de208d634c1fab77754fe16530c~tplv-obj.webp'
															alt=''
														/>
													</div>
												) : null}
											</div>
											<div className='score'>
												{close ? 'XXX' : participant.score}
											</div>
										</div>
									) : null
								)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Monitorscreen;
