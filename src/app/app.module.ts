import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { ActivitiesComponent } from './activities.comoponent';
import { ApplicationComponent } from './application.component';
import { BlogComponent } from './blog.component';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AboutComponent,ActivitiesComponent,ApplicationComponent,BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
