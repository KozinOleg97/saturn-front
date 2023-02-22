import {Component} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {SellersService} from "../sellers.service";
import {Seller} from "../../../data-types/Seller";
import {District} from "../../../data-types/District";

import {DistrictsService} from "../../districts/districts.service";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.css']
})
export class SellerEditComponent {

  constructor(private sellersService: SellersService, private districtsService: DistrictsService, private router: Router, private curRoute: ActivatedRoute) {
  }


  id: number;
  seller: Seller = new Seller();
  districtList: District[];

  allowSubmit: boolean = true;
  selectedDistrict: District;
  districtControl: FormControl = new FormControl();

  ngOnInit(): void {
    this.id = this.curRoute.snapshot.params["id"];


    this.getSellerByID();
    this.getDistrictsList();

  }

  private getSellerByID() {


    this.sellersService.getSeller(this.id).subscribe(data => {
      this.seller = data;
      // console.log(this.seller);


    }, error => console.log(error))
  }

  updateData() {
    this.sellersService.updateSeller(this.id, this.seller).subscribe(data => {
      this.getSellerByID()

    }, error => console.log(error))

  }

  delete() {
    this.sellersService.deleteSeller(this.id).subscribe(data => {
      this.router.navigate(['seller-list'])

    }, error => console.log(error))

  }

  private getDistrictsList() {
    this.districtsService.getDistrictList().subscribe(data => {
        this.districtList = data;

      },
      error => console.log(error))
  }


  onSubmit() {

    this.updateData()
  }

  onChange() {
    this.allowSubmit = this.seller.name != null && this.seller.name != "";

  }


}
