import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './utils/guards/auth.guard';
import { TeacherComponent } from './teachers/teacher.component';
import { TeachersListComponent } from './teachers/teachers-list.component';
import { getTeacherResolver } from './utils/resolvers/getTeacher.resolver';

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
                loadComponent: () => import('./teachers/teacher.component').then((c) => c.TeacherComponent),
                resolve: {
                    teacher: getTeacherResolver
                }
            }
        ]
    }
];
