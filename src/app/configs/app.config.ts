import { provideRouter } from '@angular/router';
import { routes } from './routes.config';
export const appConfig = {
  title: 'Angular Demo App',
  company: 'Danieli-Systec d.o.o.',
  copyright: `Copyright &copy; ${new Date().getFullYear()} &mdash; Danieli-Systec d.o.o.`,
  defaultLanguage: 'en',
  providers: [provideRouter(routes)],
};
