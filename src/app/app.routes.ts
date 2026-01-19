import { Routes } from '@angular/router';
import { Home } from './home';
import { Assigned } from './reports/assigned';
import { Done } from './reports/done';
import { Documentation } from './documentation';
import { Settings } from './settings';
import { Login } from './login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },
    {
        path: '',
        component: Home,
        canActivate: [authGuard],
    },
    {
        path: 'reports/assigned',
        component: Assigned,
        canActivate: [authGuard],
    },
    {
        path: 'reports/done',
        component: Done,
        canActivate: [authGuard],
    },
    {
        path: 'documentation',
        component: Documentation,
        canActivate: [authGuard],
    },
    {
        path: 'settings',
        component: Settings,
        canActivate: [authGuard],
    },
];
