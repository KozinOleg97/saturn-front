import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {Seller} from "../../../data-types/Seller";
import {District} from "../../../data-types/District";
import {DistrictsService} from "../../districts/districts.service";
import {SellersService} from "../sellers.service";

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.css']
})
export class SellerAddComponent {
  constructor(private sellersService: SellersService, private districtsService: DistrictsService, private router: Router) {
  }


  seller: Seller = new Seller();
  allowSubmit: boolean = false;

  districtList: District[];

  ngOnInit(): void {
    this.getDistrictsList();
  }


  onChange() {
    this.allowSubmit = this.seller.name != null && this.seller.name != "";

  }


  onSubmit() {
    this.sellersService.addSeller(this.seller).subscribe(data => {
      this.router.navigate(['seller-list'])

    }, error => console.log(error))
  }


  private getDistrictsList() {
    this.districtsService.getDistrictList().subscribe(data => {
        this.districtList = data;

      },
      error => console.log(error))
  }
}
