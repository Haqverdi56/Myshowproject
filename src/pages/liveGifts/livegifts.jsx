import { useEffect, useState } from 'react';
import './livegifts.css'

function Livegifts({ giftData }) {
	console.log(giftData);
	const formatDate = (timestamp) => {
		const date = new Date(timestamp);
		return date.toLocaleString();
	};
	return (
		<div id='live-gifts'>
			<div className='gifts'>
				{giftData?.map(
					(newGift, i) => (
						(
							<div className='gift-box' key={i}>
								<div className='gift-imgs'>
									<div className='sender-img'>
										<img src={newGift?.profilePictureUrl} alt='' />
									</div>
									<div className='gift-repeatCount'>{newGift?.repeatCount}x</div>
									<div className='gift-photo'>
										<img src={newGift?.giftPictureUrl} alt='' />
									</div>
								</div>
								<div className='sender-name'>
									<p>{newGift?.uniqueId} jeton: {newGift.diamondCount * newGift.repeatCount}</p>
								</div>
								<p>{formatDate(newGift?.timestamp)}</p>
							</div>
						)
					)
				)}
			</div>
		</div>
	);
}

export default Livegifts;
