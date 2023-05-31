import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { RefillRequestComponent } from './refill-request/refill-request.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'prescriptions', component: PrescriptionListComponent },
  { path: 'refill-request', component: RefillRequestComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Add a default route
  { path: '**', redirectTo: 'login' }, // Add a wildcard route for handling unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
