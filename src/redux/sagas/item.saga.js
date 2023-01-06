import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_ITEMS" actions
function* fetchItems(action) {
    try {

    const response = yield axios.get('/api/items');
    console.log('fetch all:', response.data);
    yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (error) {
    console.log('User get request failed', error);
    }
}

function* packItem(action) {
    try {

        const response = yield axios.put('/api/items');
        console.log('updating item', response.data);
        yield put({ type: 'FETCH_ITEMS' });
    }catch(err) {
        console.log('Err in updating item', err);
    }
}


function* addItem(action) {
    console.log('in addItem, action.payload:', action.payload);
    try {
        console.log('SO FAR');
        yield axios.post('/api/items', action.payload);
        console.log('SO GOOD');
    // update state for DB data with new item
        yield put({ type: 'FETCH_ITEMS' });
        console.log('Fingers crossed');
    }catch(err) {
        console.log('Post new item error', err);
    }
}

function* deleteItem(action) {
	console.log('in deleteItem, action.payload is:', action.payload);
	try {
		console.log('in deleteItem');
		yield axios.delete('/api/item/' + action.payload);
		
		yield put({type: 'FETCH_ITEMS'});
	} catch(err){
		console.log('error deleting', err);
	}
}

function* editItem(action) {
    console.log('in item.saga editItem', action.payload);
    try {
        yield axios.put('/api/items/' + action.payload.id, action.payload);
        yield put({type: 'FETCH_ITEMS'});
    }
    catch (error) {
        console.log('error in item.saga editItem', error);
    }
}

function* itemSaga(action) {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('PACK_ITEM', packItem);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('EDIT_ITEM', editItem);
}

export default itemSaga;