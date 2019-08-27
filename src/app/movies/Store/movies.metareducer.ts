import { merge, pick } from 'lodash';
import { MetaReducer, ActionReducer, Action } from '@ngrx/store';



function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

const stateKeys = ['activeMovieId'];

const localStorageKey = '__selected_movie__';

export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>) {
  let onInit = true; 
  return function(state: S, action: A): S {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit           = false;
      const savedState = getSavedState(localStorageKey);
      let merged =  merge(nextState, savedState);
      return merged;
    }
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}


export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];
