import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./shared/angular-material/angular-material.module";

import { AppComponent } from './app.component';

import { NavigationComponent } from './shared/navigation/navigation.component';
import { IconComponent } from './shared/icon/icon.component';
import { CustomIconComponent } from './shared/custom-icon/custom-icon.component';

import { HomepageComponent } from './modules/homepage/homepage.component';

import { EditorComponent } from './modules/editor/editor.component';
import { FiltersContainerComponent } from './modules/editor/filters-container/filters-container.component';
import { FilterComponent } from './modules/editor/filters-container/filter/filter.component';
import { ImageContainerComponent } from './modules/editor/image-container/image-container.component';
import { AppliedFiltersContainerComponent } from './modules/editor/applied-filters-container/applied-filters-container.component';
import { OptionsContainerComponent } from './modules/editor/options-container/options-container.component';
import { NoImageComponent } from './modules/editor/image-container/no-image/no-image.component';
import { AppliedFilterComponent } from './modules/editor/applied-filters-container/applied-filter/applied-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IconComponent,
    CustomIconComponent,
    HomepageComponent,
    EditorComponent,
    FiltersContainerComponent,
    FilterComponent,
    ImageContainerComponent,
    AppliedFiltersContainerComponent,
    OptionsContainerComponent,
    NoImageComponent,
    AppliedFilterComponent
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
