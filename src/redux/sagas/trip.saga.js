import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TRIPS" actions
function* fetchTrips() {
    try {

    const response = yield axios.get('/api/trips');
    yield put({ type: 'SET_TRIPS', payload: response.data });
    } catch (error) {
    console.log('User get request failed', error);
    }
}

function* tripSaga() {
    yield takeLatest('FETCH_TRIPS', fetchTrips);
}

export default tripSaga;