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

function* deleteTrip(action) {
	console.log(action.payload);
	try {
		console.log('in deleteTrip');
		yield axios.delete('/api/trips/' + action.payload.id);
		
		yield put({type: 'FETCH_TRIPS'});
	} catch(err){
		console.log('error deleting', err);
	}
}

function* editTrip(action) {
    console.log('in trip.saga editTrip', action.payload);
    try {
        yield axios.put('/api/trips/' + action.payload.id, action.payload);
        yield put({type: 'FETCH_TRIPS'});
    }
    catch (error) {
        console.log('error in trip.saga editTrip', error);
    }
}

function* tripSaga() {
    yield takeLatest('FETCH_TRIPS', fetchTrips);
    yield takeLatest('ADD_TRIP', addTrip);
    yield takeLatest('DELETE_TRIP', deleteTrip);
    yield takeLatest('EDIT_TRIP', editTrip);
}

export default tripSaga;