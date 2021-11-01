import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAthletesComponent } from './create-athletes/create-athletes.component';
import { SearchAthletesComponent } from './search-athletes/search-athletes.component';

const routes: Routes = [
  {path:'home', component:AppComponent},
  {path:'create', component:CreateAthletesComponent},
  {path:'search',component:SearchAthletesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
