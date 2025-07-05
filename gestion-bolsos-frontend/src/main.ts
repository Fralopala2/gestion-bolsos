// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import 'zone.js'; // <-- ¡Esta línea es CRÍTICA! Debe estar aquí y ser la primera importación si es posible.

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));