import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromBooks from "./books.reducer";

export interface BookState {
    books: fromBooks.State;
  }

export const selectBooksState = (state: BookState) => state.books;

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);

export const selectActiveBook = createSelector(
  selectBooksState,
  fromBooks.selectActiveBook
);

export const selectBookEarningsTotals = createSelector(
  selectBooksState,
  fromBooks.selectEarningsTotals
);