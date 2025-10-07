
import { Routes } from '@angular/router';
import { CospyHomeComponent } from './cospy-home/cospy-home.component';
import { OpenBridgeHomeComponent } from './openbridge-home/openbridge-home.component';

export const routes: Routes = [
  { path: '', component: CospyHomeComponent },
  { path: 'openbridge', component: OpenBridgeHomeComponent },
  //{ path: '', component: HomeComponent },
];
