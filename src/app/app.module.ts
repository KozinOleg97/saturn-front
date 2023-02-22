import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { DistrictListComponent } from './endpoints/districts/district-list/district-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import { DistrictEditComponent } from './endpoints/districts/district-edit/district-edit.component';
import { DistrictDeleteComponent } from './endpoints/districts/district-delete/district-delete.component';
import { DistrictAddComponent } from './endpoints/districts/district-add/district-add.component';
import { SellerListComponent } from './endpoints/sellers/seller-list/seller-list.component';
import { SellerAddComponent } from './endpoints/sellers/seller-add/seller-add.component';
import { SellerDeleteComponent } from './endpoints/sellers/seller-delete/seller-delete.component';
import { SellerEditComponent } from './endpoints/sellers/seller-edit/seller-edit.component';
import { BuyerEditComponent } from './endpoints/buyers/buyer-edit/buyer-edit.component';
import { BuyerAddComponent } from './endpoints/buyers/buyer-add/buyer-add.component';
import { BuyerDeleteComponent } from './endpoints/buyers/buyer-delete/buyer-delete.component';
import { BuyerListComponent } from './endpoints/buyers/buyer-list/buyer-list.component';
import {MainInterceptor} from "./Interceptors/MainInterceptor";
import {environment} from "../environments/environment";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { DealListComponent } from './endpoints/deals/deal-list/deal-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DistrictListComponent,
    DistrictEditComponent,
    DistrictDeleteComponent,
    DistrictAddComponent,
    SellerListComponent,
    SellerAddComponent,
    SellerDeleteComponent,
    SellerEditComponent,
    BuyerEditComponent,
    BuyerAddComponent,
    BuyerDeleteComponent,
    BuyerListComponent,
    DealListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MainInterceptor,
    multi: true,
  },
    {
      provide: "BASE_API_URL", useValue: environment.apiUrl
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
