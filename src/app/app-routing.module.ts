import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LegacyRedirectComponent } from './pages/legacy-redirect.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: LegacyRedirectComponent, data: { fragment: 'about' } },
  { path: 'Skills', component: LegacyRedirectComponent, data: { fragment: 'skills' } },
  { path: 'Project', component: LegacyRedirectComponent, data: { fragment: 'projects' } },
  { path: 'Contact-Us', component: LegacyRedirectComponent, data: { fragment: 'contact' } },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 88],
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
