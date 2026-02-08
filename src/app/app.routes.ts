import {Routes} from '@angular/router';
import {TeamList} from './pages/team/team-list/team-list';
import {TeamForm} from './pages/team/team-form/team-form';

export const routes: Routes = [
    {
        path: 'team',
        component: TeamList
    },
    {
        path: 'team/edit/:id',
        component: TeamForm
    },
    {
        path: 'team/create',
        component: TeamForm
    },

];
