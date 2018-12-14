import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { CustomComponent } from './components/custom/custom.component';


const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' }, // default
  { path: 'default', component: DefaultComponent },
  { path: 'custom', component: CustomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
