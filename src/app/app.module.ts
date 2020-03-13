import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InterpolationComponent } from './interpolation.component';
import { OnewayComponent } from './binding/oneway.component';
import { ContactComponent } from './binding/contact.component';
import { MyClickDirective } from './binding/my-click.directive';
import { OnewayStatementComponent } from './binding/oneway-statement.component';
import { TwowayComponent } from './binding/twoway.component';
import { NgclassComponent } from './binding/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle.component';
import { NgifComponent } from './binding/ngif.component';
import { NgswitchComponent } from './binding/ngswitch.component';
import { NgforComponent } from './binding/ngfor.component';
import { RefComponent } from './binding/ref.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    InterpolationComponent,
    OnewayComponent,
    ContactComponent,
    MyClickDirective,
    OnewayStatementComponent,
    TwowayComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    RefComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
