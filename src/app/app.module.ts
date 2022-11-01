import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, LoginComponent, CategoriesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
