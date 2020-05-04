import { takeLatest, put, spawn} from 'redux-saga/effects';
import { populateServices, fetchServicesSuccess, fetchServicesFail, setFocusedItem, fetchDetailsStart, fetchDetailsSuccess, fetchDetailsFail} from '../actions/actionCreators';
import { FETCH_SERVICES_START, CHANGE_FOCUSED_ITEM_ID } from '../actions/actionTypes';
import { callApi } from '../api/index';

function* watchFetchServiceStart () {
    yield takeLatest(FETCH_SERVICES_START, handleFetchServiceStart);
}

function* handleFetchServiceStart() {
    try {
        const services = yield callApi();
        yield put(populateServices(services));
        yield put(fetchServicesSuccess());
    } catch {
        yield put(fetchServicesFail());
    }
}

function* watchChangeFocusedItemId() {
    yield takeLatest(CHANGE_FOCUSED_ITEM_ID, handleChangeFocusedItemId);
}

function* handleChangeFocusedItemId(action) {
    yield put(fetchDetailsStart());
    try {
        const details = yield callApi(action.payload.id);
        yield put(setFocusedItem(details));
        yield put(fetchDetailsSuccess());
    } catch {
        yield put(fetchDetailsFail());
    }
}

export default function* saga() {
    yield spawn(watchFetchServiceStart);
    yield spawn(watchChangeFocusedItemId);
}