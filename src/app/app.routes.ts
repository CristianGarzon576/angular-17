import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { AuthService } from '@services/auth.service';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        providers: []
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        providers: []
    }
];
