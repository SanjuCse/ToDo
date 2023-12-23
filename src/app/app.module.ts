import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AboutComponent } from './about/about.component';

var myRoutes: Routes = [
  { path: "", component: ToDoComponent },
  { path: "todo", component: ToDoComponent },
  { path: "about", component: AboutComponent },
];

var myRoutes2 = RouterModule.forRoot(myRoutes);

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    myRoutes2
  ],
  providers: [],
  bootstrap: [HeaderComponent, ToDoComponent]
})
export class AppModule { }
