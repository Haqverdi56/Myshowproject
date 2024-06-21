import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching participants
export const fetchParticipants = createAsyncThunk(
	'participants/fetchParticipants',
	async () => {
		const response = await axios.get('http://localhost:3000/api/participants');
		return response.data;
	}
);

// Async thunk for updating participant score
export const updateParticipantScore = createAsyncThunk(
	'participants/updateParticipantScore',
	async ({ uniqueId, score }) => {
		const response = await axios.patch(
			`http://localhost:3000/api/participants/${uniqueId}`,
			{ score }
		);
		return response.data;
	}
);

const participantsSlice = createSlice({
	name: 'participants',
	initialState: {
		participants: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchParticipants.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchParticipants.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.participants = action.payload;
			})
			.addCase(fetchParticipants.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateParticipantScore.fulfilled, (state, action) => {
				const updatedParticipant = action.payload;
				const existingParticipant = state.participants.find(
					(p) => p.uniqueId === updatedParticipant.uniqueId
				);
				if (existingParticipant) {
					existingParticipant.score = updatedParticipant.score;
				}
			});
	},
});

export default participantsSlice.reducer;
