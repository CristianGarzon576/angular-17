import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { AuthService } from '@services/auth.service';
import { TeacherComponent } from './teachers/teacher.component';
import { TeachersListComponent } from './teachers/teachers-list.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        providers: []
    },
    {
        path: 'teachers',
        component: DashboardComponent,
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: '',
                component: TeachersListComponent
            },
            {
                path: ':id',
                component: TeacherComponent
            }
        ]
    }
];
