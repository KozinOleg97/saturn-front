import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DistrictListComponent} from "./endpoints/districts/district-list/district-list.component";
import {DistrictEditComponent} from "./endpoints/districts/district-edit/district-edit.component";
import {DistrictAddComponent} from "./endpoints/districts/district-add/district-add.component";
import {SellerListComponent} from "./endpoints/sellers/seller-list/seller-list.component";
import {SellerEditComponent} from "./endpoints/sellers/seller-edit/seller-edit.component";
import {SellerAddComponent} from "./endpoints/sellers/seller-add/seller-add.component";
import {BuyerListComponent} from "./endpoints/buyers/buyer-list/buyer-list.component";
import {BuyerEditComponent} from "./endpoints/buyers/buyer-edit/buyer-edit.component";
import {BuyerAddComponent} from "./endpoints/buyers/buyer-add/buyer-add.component";
import {DealListComponent} from "./endpoints/deals/deal-list/deal-list.component";





const routes: Routes = [
  {path:'', redirectTo:'seller-list', pathMatch: 'full'},

  {path:`district-edit/:id`, component: DistrictEditComponent},
  {path:`district-add`, component: DistrictAddComponent},
  {path:'district-list', component: DistrictListComponent},

  {path:`seller-list`, component: SellerListComponent},
  {path:`seller-edit/:id`, component: SellerEditComponent},
  {path:`seller-add`, component: SellerAddComponent},

  {path:`buyer-list`, component:  BuyerListComponent},
  {path:`buyer-edit/:id`, component: BuyerEditComponent},
  {path:`buyer-add`, component: BuyerAddComponent},

  {path:`deal-list`, component:  DealListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
