import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./shared/angular-material/angular-material.module";

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
