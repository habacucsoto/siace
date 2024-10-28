import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportTableComponent } from './report-table/report-table.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'report', component: ReportTableComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }  // Cualquier ruta desconocida redirige al login
  ];
  
