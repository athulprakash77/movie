import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';
import { MovieditComponent } from './moviedit/moviedit.component';
import { MoviedeleteComponent } from './moviedelete/moviedelete.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const myroutes=[

  {path:"",component:AddmovieComponent},
  {path:"moviesearch",component: MoviesearchComponent},
  {path:"moviedit",component: MovieditComponent },
  {path:"moviedelete",component: MoviedeleteComponent},
  {path:"viewmovie",component: ViewmovieComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    MoviesearchComponent,
    MovieditComponent,
    MoviedeleteComponent,
    ViewmovieComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
