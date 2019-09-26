import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { InterpolationBingindComponent } from './interpolation-bingind/interpolation-bingind.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationBindingComponent,
    InterpolationBingindComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
