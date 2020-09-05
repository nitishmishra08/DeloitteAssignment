import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ContentComponent } from './content/content.component';
import { MyCartComponent } from './my-cart/my-cart.component';


const routes: Routes = [

  {                                         
    path: '',
    redirectTo: '/collection',
    pathMatch: 'full'
  },
  {
     path: 'collection',
     component: ContentComponent
  },
  {
    path: 'mycart',
    component: MyCartComponent
 },
 { path: 'mycart/:Title', component: MyCartComponent },

  { path: 'collection/:Title', component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
