import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { FactionPageComponent } from './pages/faction-page/faction-page.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "factions", component: FactionPageComponent },
]
