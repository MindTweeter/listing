import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app/app.component';
import { CatListingComponent } from '../app/components/cat-listing/cat-listing.component';

const routes: Routes = [
  {
    path: '',
    component: CatListingComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [], // syed added for update
})
export class AppRoutingModule {}
