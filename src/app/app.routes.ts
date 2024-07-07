import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { FactionPageComponent } from './pages/faction-page/faction-page.component';
import { DateCounterComponent } from './components/date-counter/date-counter.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "factions/:factionName", component: FactionPageComponent },
    { path: "date-counter", component: DateCounterComponent },
]
