import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { routes } from '../app.routes';

export const appConfiguration = {
  title: 'Angular Demo App',
  company: 'Danieli-Systec d.o.o.',
  copyright: `Copyright © ${new Date().getFullYear()} — {Danieli-Systec d.o.o.}`,
  defaultLanguage: 'en',
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
