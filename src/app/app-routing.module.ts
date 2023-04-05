import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
//   { path:'', redirectTo: 'home', pathMatch: 'full' },
//   { path:'home', component: MainComponent },
//   // { path:'buttons', component: ButtonsComponent },
//   { path: '**', redirectTo: 'home' }
// ];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
