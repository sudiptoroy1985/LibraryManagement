import { MetaReducer, ActionReducer } from '@ngrx/store';

export function logger(reducer : ActionReducer<any>): ActionReducer<any>  {
    return function( state, action ) {
      console.group(action.type);
      const nextState = reducer(state, action);
      console.log('***Books Metareducer***');
      console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
      console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
      console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
      console.groupEnd();
      return nextState;
    }
  }

export const metaReducers: MetaReducer<any>[] = [logger];
