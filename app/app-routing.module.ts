import { WineSectionComponent } from './wine/wine-section.component';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: '', 
            component: HomeComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'wines',
            component: WineSectionComponent
        },
        {
            path: '**',
            component: NotFoundComponent
        }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule {}