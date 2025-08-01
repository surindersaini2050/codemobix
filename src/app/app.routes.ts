import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '', component: Homepage,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', component: Home, title: 'CodeMobix' },
            { path: 'services', loadComponent: () => import('./pages/services/services').then(c => c.Services), title: 'Services' },
            { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us').then(c => c.ContactUs), title: 'Contact Us' },
            { path: 'about-us', loadComponent: () => import('./pages/about-us/about-us').then(c => c.AboutUs), title: 'About Us' },
        ]
    },
    { path: '**', redirectTo: 'home' },
];
