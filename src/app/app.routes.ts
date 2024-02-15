import { Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

export const routes: Routes = [
    { path: 'test', component: TestingComponent },
    {
        path: 'heroes',
        loadChildren: () => import('./hero/hero.module').then(module => module.HeroModule)
    }
];
