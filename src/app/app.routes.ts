import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { OfferComponent } from './component/offer/offer.component';
import { ApproachComponent } from './component/approach/approach.component';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { DatenschutzComponent } from './component/datenschutz/datenschutz.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'offer',
        component: OfferComponent
    },
    {
        path: 'approach',
        component: ApproachComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'impressum',
        component: ImpressumComponent
    },
    {
        path: 'datenschutz',
        component: DatenschutzComponent
    }
];
