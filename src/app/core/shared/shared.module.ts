import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent,

  ],
  imports: [
    HttpClientModule,
    RouterModule
  ],
  exports:[
    HttpClientModule,
    RouterModule,
    NotFoundComponent
  ]
})
export class SharedModule { }
