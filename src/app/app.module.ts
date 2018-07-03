import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './authors.service';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';
import { FilmComponent } from './film/film.component';
import { FilmService } from './film.service';
import { CarComponent } from './car/car.component';
import { CarsService } from './cars.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    PersonComponent,
    FilmComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PersonService,
    FilmService,
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
