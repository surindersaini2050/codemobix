import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Services } from './pages/services/services';

export const routes: Routes = [
    {
        path: '', component: Homepage,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', component: Home, title: 'Home' },
            { path: 'services', component: Services,  title: 'Services' },
            { path: 'contact-us', component: ContactUs,  title: 'Contact Us' },
            { path: 'about-us', component: AboutUs,  title: 'About Us' },
        ]
    },
    { path: '**', redirectTo: 'home' },
];
