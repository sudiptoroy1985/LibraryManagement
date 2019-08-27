import { metaReducers } from "./Store/movies.metareducer";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { EffectsModule } from "@ngrx/effects";

import { MaterialModule } from "src/app/material.module";
import { MovieApiEffects } from "./movie-api.effects";

import { MoviesPageComponent } from "./components/movies-page/movies-page.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MoviesTotalComponent } from "./components/movies-total/movies-total.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./Store/movies.reducer";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature("movies", reducer, { metaReducers}),
    RouterModule.forChild([{ path: "movies", component: MoviesPageComponent }]),
    EffectsModule.forFeature([MovieApiEffects])
  ],
  declarations: [
    MoviesPageComponent,
    MovieDetailComponent,
    MoviesListComponent,
    MoviesTotalComponent
  ]
})
export class MoviesModule {}
