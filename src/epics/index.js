import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, switchMap } from 'rxjs/operators';
import { FETCH_SERVICES_START } from '../actions/actionTypes';
import { populateServices } from '../actions/actionCreators';
// import { of } from 'rxjs';

export const serviceListEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICES_START),
  switchMap(o => ajax.getJSON(`http://localhost:7070/api/services`).pipe(
    retry(7),
    map(o => populateServices(o)),
    // catchError(e => of(searchSkillsFailure(e))),
  )),
);