import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { RefillRequestComponent } from './refill-request/refill-request.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
