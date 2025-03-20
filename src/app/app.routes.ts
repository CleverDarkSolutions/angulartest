import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RentalsComponent} from './pages/rentals/rentals.component';
import {EventsComponent} from './pages/events/events.component';
import {SaleComponent} from './pages/sale/sale.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutUsComponent},
  { path: 'rentals', component: RentalsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'sale', component: SaleComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard for unknown paths
];
