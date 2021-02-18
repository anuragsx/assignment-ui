import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneNumberTaskComponent } from './phone-number-task/phone-number-task.component';

const routes: Routes = [
  { path: '', component: PhoneNumberTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
