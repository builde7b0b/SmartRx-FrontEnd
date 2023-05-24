import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { RefillRequestComponent } from './refill-request/refill-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrescriptionListComponent,
    RefillRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
