import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgonauteCrudComponent } from './argonaute-crud/argonaute-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'argonaute-crud',
    component: ArgonauteCrudComponent,
  },
  {
    path: 'argonaute-form',
    component: ArgonauteCrudComponent,
  },
  {
    path: 'argonaute-list',
    component: ArgonauteCrudComponent,
  },
  {
    path: 'footer',
    component: HeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
