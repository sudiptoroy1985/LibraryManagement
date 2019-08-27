import { metaReducers } from "./Store/books.metareducer";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "src/app/material.module";

import { BooksPageComponent } from "./components/books-page/books-page.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BooksTotalComponent } from "./components/books-total/books-total.component";

import { EffectsModule } from "@ngrx/effects";
import { BooksApiEffects } from "./books-api.effects";
import { StoreModule, MetaReducer, ActionReducer } from "@ngrx/store";
import { reducer } from "./Store/books.reducer";



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature( 'books', reducer,  { metaReducers }),
    RouterModule.forChild([{ path: "books", component: BooksPageComponent }]),
    EffectsModule.forFeature([BooksApiEffects])
  ],
  declarations: [
    BooksPageComponent,
    BookDetailComponent,
    BooksListComponent,
    BooksTotalComponent
  ]
})
export class BooksModule {}
