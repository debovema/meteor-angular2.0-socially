import 'reflect-metadata';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Socially } from './app.component';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(Socially, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
