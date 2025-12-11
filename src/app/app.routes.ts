import { Routes } from '@angular/router';
import { Home } from './home';
import { Assigned } from './reports/assigned';
import { Done } from './reports/done';
import { Documentation } from './documentation';
import { Settings } from './settings';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'reports/assigned',
        component: Assigned,
    },
    {
        path: 'reports/done',
        component: Done,
    },
    {
        path: 'documentation',
        component: Documentation,
    },
    {
        path: 'settings',
        component: Settings,
    }
];
