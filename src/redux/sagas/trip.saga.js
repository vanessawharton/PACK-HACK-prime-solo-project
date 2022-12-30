import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TRIPS" actions
function* fetchTrips(action) {
    try {

    const response = yield axios.get('/api/trips');
    yield put({ type: 'SET_TRIPS', payload: response.data });
    } catch (error) {
    console.log('User get request failed', error);
    }
}

function* addTrip(action) {
    try {

    const response = yield axios.post('/api/trips', action.payload);
    // update state for DB data with new trip
        yield put ({ type: fetchTrips });
    }catch{
        console.log('Post new trip error');
    }
}

function* tripSaga() {
    yield takeLatest('FETCH_TRIPS', fetchTrips);
    yield takeLatest('ADD_TRIP', addTrip);
}

export default tripSaga;