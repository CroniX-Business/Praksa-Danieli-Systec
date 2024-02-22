import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  RouterLinkActive,
  RouterOutlet,
  RouterLink,
} from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
