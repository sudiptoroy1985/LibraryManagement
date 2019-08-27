import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromMovies from "./movies.reducer";

export interface MovieState {
    movies: fromMovies.State;
  }

export const selectMovieState = (state: MovieState) => state.movies;

export const selectMovieEntities = createSelector(
  selectMovieState,
  fromMovies.selectEntities
);

export const selectMovies = createSelector(
  selectMovieState,
  fromMovies.selectAll
);

export const selectActiveMovieId = createSelector(
  selectMovieState,
  fromMovies.selectActiveMovieId
);

export const selectActiveMovie = createSelector(
  selectMovieState,
  fromMovies.selectActiveMovie
);

export const selectMoviesEarningsTotal = createSelector(
  selectMovieState,
  fromMovies.selectEarningsTotal
);

