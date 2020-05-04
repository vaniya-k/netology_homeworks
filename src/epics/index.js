import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, catchError, concatMap} from 'rxjs/operators';
import { FETCH_SERVICES_START, CHANGE_FOCUSED_ITEM_ID } from '../actions/actionTypes';
import { populateServices, fetchServicesSuccess, fetchServicesFail, setFocusedItem, fetchDetailsSuccess, fetchDetailsFail } from '../actions/actionCreators';
import { of } from 'rxjs';

export const serviceListEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICES_START),
  switchMap(o => ajax.getJSON(`http://localhost:7070/api/services`).pipe(
    concatMap((o) => ([
      populateServices(o),
      fetchServicesSuccess()
    ])),
    catchError(() => of(fetchServicesFail())),
  )),
);

export const focusedItemEpic = action$ => action$.pipe(
  ofType(CHANGE_FOCUSED_ITEM_ID),
  switchMap(o => ajax.getJSON(`http://localhost:7070/api/services/${o.payload.id}`).pipe(
    concatMap((o) => ([
      setFocusedItem(o),
      fetchDetailsSuccess()
    ])),
    catchError(() => of(fetchDetailsFail())),
  )),
);