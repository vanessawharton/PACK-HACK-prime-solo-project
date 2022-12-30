import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PACKING_LISTS" actions
function* fetchPackingLists(action) {
    try {

    const response = yield axios.get('/api/packinglists');
    yield put({ type: 'SET_PACKING_LISTS', payload: response.data });
    } catch (error) {
    console.log('User get request failed', error);
    }
}

function* fetchSelectedPackingList(action) {
    //get selected(clicked) packing list from the DB

    //Need to pull in DB id
    const selectedPackingListId = action.payload;

    try {
        const packingList = yield axios.get(`/api/packinglists/${selectedPackingListId}`);

        // send packing list data to reducer as an array
        yield put({ type: 'SET_PACKING_LISTS', payload: packingList.data});
    } catch{
        console.log('Selected packing list GET error');
    }
}

function* addPackingList(action) {
    console.log('in addPackingList, action.payload:', action.payload);
    try {
        yield axios.post('/api/packinglists', action.payload);
    // update state for DB data with new packing list
        yield put ({ type: 'FETCH_PACKING_LISTS'});
    }catch(err) {
        console.log('Post new packing list error', err);
    }
}

function* deletePackingList(action) {
	console.log(action.payload);
	try {
		console.log('in deletePackingList');
		yield axios.delete('/api/packinglists/' + action.payload.id);
		
		yield put({type: 'FETCH_PACKING_LISTS'});
	} catch(err){
		console.log('error deleting', err);
	}
}

function* editPackingList(action) {
    console.log('in packingList.saga editPackingList', action.payload);
    try {
        yield axios.put('/api/packingLists/' + action.payload.id, action.payload);
        yield put({type: 'FETCH_PACKING_LISTS'});
    }
    catch (error) {
        console.log('error in packingList.saga editPackingList', error);
    }
}

function* packingListSaga(action) {
    yield takeLatest('FETCH_PACKING_LISTS', fetchPackingLists);
    yield takeLatest('FETCH_SELECT_PACKING_LIST', fetchSelectedPackingList);
    yield takeLatest('ADD_PACKING_LIST', addPackingList);
    yield takeLatest('DELETE_PACKING_LIST', deletePackingList);
    yield takeLatest('EDIT_PACKING_LIST', editPackingList);
}

export default packingListSaga;