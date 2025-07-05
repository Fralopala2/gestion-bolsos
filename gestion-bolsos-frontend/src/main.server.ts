// src/main.server.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import 'zone.js'; // ¡Añade esta línea aquí!

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;