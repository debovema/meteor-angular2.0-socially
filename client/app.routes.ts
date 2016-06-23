import { provideRouter, RouterConfig } from '@angular/router';

import { PartiesList } from './imports/parties-list/parties-list';
import { PartyDetails } from './imports/party-details/party-details';

export const routes: RouterConfig = [
  { path: '', component: PartiesList },
  { path: 'party/:partyId', component: PartyDetails },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
