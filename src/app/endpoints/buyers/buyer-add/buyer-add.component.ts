import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {Buyer} from "../../../data-types/Buyer";
import {BuyersService} from "../buyers.service";
import {DistrictsService} from "../../districts/districts.service";
import {District} from "../../../data-types/District";

@Component({
  selector: 'app-buyer-add',
  templateUrl: './buyer-add.component.html',
  styleUrls: ['./buyer-add.component.css']
})
export class BuyerAddComponent {
  constructor(private buyersService: BuyersService, private districtsService: DistrictsService, private router: Router) {
  }


  buyer: Buyer = new Buyer();
  allowSubmit: boolean = false;
  districtList: District[];
  ngOnInit(): void {
    this.buyer.exclude_last_first_floor = false;

    this.getDistrictsList();
  }


  onChange() {
    this.allowSubmit = this.buyer.name != null && this.buyer.name != "";

  }


  onSubmit() {
    this.buyersService.addBuyer(this.buyer).subscribe(data => {
      this.router.navigate(['buyer-list'])

    }, error => console.log(error))
  }

  private getDistrictsList() {
    this.districtsService.getDistrictList().subscribe(data => {
        this.districtList = data;

      },
      error => console.log(error))
  }
}
