import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WineSectionComponent }   from './wine-section.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'wines',
        component: WineSectionComponent,
        children: [
          {
            path: 'list',
            component: WineListComponent
          },
          {
            path: 'add',
            component: WineFormComponent
          }
        ]
      }
    ])
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers: [],
})
export class WineSectionRoutingModule { }
