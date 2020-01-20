import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessengingComponent } from './Components/Messenging/messenging.component';
import { RegisterComponent } from './Components/Registration/register/register.component';
import { LoginComponent } from './Components/Registration/login/login.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'messenger', component: MessengingComponent  },

  // {path: '', redirectTo: 'messenger', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
