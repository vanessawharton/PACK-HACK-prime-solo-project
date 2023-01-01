import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import TripsPage from '../../components/TripsPage/TripsPage';

// worker Saga: will be fired on "FETCH_TRIPS" actions
function* fetchTrips(action) {
    try {

    const response = yield axios.get('/api/trips');
    console.log('fetch all:', response.data);
    yield put({ type: 'SET_TRIPS', payload: response.data });
    } catch (error) {
    console.log('User get request failed', error);
    }
}

function* fetchSelectedTrip(action) {
    //get selected(clicked) trip from the DB

    //Need to pull in DB id
    const selectedTripId = action.payload;

    try {
        const trip = yield axios.get(`/api/trips/${selectedTripId}`);

        // send trip data to reducer as an array
        yield put({ type: 'SET_TRIPS', payload: trip.data});
    } catch{
        console.log('Selected trip GET error');
    }
}

function* addTrip(action) {
    console.log('in addTrip, action.payload:', action.payload);
    try {
        console.log('SO FAR');
        yield axios.post('/api/trips', action.payload);
        console.log('SO GOOD');
    // update state for DB data with new trip
        yield put({ type: 'FETCH_TRIPS' });
        console.log('Fingers crossed');
    }catch(err) {
        console.log('Post new trip error', err);
    }
}

function* deleteTrip(action) {
	console.log('in deleteTrip, action.payload is:', action.payload);
	try {
		console.log('in deleteTrip');
		yield axios.delete('/api/trips/' + action.payload);
		
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

function* tripSaga(action) {
    yield takeLatest('FETCH_TRIPS', fetchTrips);
    yield takeLatest('FETCH_SELECT_TRIP', fetchSelectedTrip);
    yield takeLatest('ADD_TRIP', addTrip);
    yield takeLatest('DELETE_TRIP', deleteTrip);
    yield takeLatest('EDIT_TRIP', editTrip);
}

export default tripSaga;