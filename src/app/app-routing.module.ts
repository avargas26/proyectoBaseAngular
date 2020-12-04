import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';

const routes: Routes = [
  //cargar modulo hijo, solo cuando lo requiera
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:[ RouterModule.forRoot(routes, { useHash: true} )],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
