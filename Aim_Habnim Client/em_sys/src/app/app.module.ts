import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StaffComponent } from './pages/staff/staff.component';
import { DatePickerPopupComponent } from './ui-lib/date-picker-popup/date-picker-popup.component';

/*
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
*/
import { environment } from './../environments/environment';
import { Try1Component } from './animation/try1/try1.component';
import { TopNav2Component } from './ui/top-nav2/top-nav2.component';
import { StaffAddComponent } from './pages/staff/add/add.component';
import { FamilyComponent } from './pages/family/family.component';

import { AddFamilyComponent } from './pages/family/add-family/add-family.component';
import { ViewFamilyComponent } from './pages/family/view-family/view-family.component';

import { InterviewComponent } from './pages/interview/interview.component';
import { AddComponent } from './pages/interview/add/add.component';


//import { BrowserModule } from '@angular/platform-browser';

//import {NoopAnimationPlayer} from '@angular/animations';

//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
//import { BROWSER_NOOP_ANIMATIONS_PROVIDERS } from '@angular/platform-browser/animations/src/providers';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    DatePickerPopupComponent,
    Try1Component,
    TopNav2Component,
    StaffAddComponent,
    FamilyComponent,
    AddFamilyComponent,
    InterviewComponent,
    AddComponent,
    ViewFamilyComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   // MDBBootstrapModule.forRoot()
    //NoopAnimationsModule
   /*AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
