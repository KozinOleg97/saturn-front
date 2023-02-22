import {Component} from '@angular/core';

import {DistrictsService} from "../../districts/districts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Buyer} from "../../../data-types/Buyer";
import {District} from "../../../data-types/District";
import {BuyersService} from "../buyers.service";

@Component({
  selector: 'app-buyer-edit',
  templateUrl: './buyer-edit.component.html',
  styleUrls: ['./buyer-edit.component.css']
})
export class BuyerEditComponent {

  constructor(private buyersService: BuyersService, private districtsService: DistrictsService, private router: Router, private curRoute: ActivatedRoute) {
  }


  id: number;
  buyer: Buyer = new Buyer();
  districtList: District[];

  allowSubmit: boolean = true;


  ngOnInit(): void {
    this.id = this.curRoute.snapshot.params["id"];


    this.getBuyerByID();
    this.getDistrictsList();

  }

  private getBuyerByID() {


    this.buyersService.getBuyer(this.id).subscribe(data => {
      this.buyer = data;
      console.log(this.buyer);


    }, error => console.log(error))
  }

  updateData() {
    this.buyersService.updateBuyer(this.id, this.buyer).subscribe(data => {
      this.getBuyerByID()

    }, error => console.log(error))

  }

  delete() {
    this.buyersService.deleteBuyer(this.id).subscribe(data => {
      this.router.navigate(['buyer-list'])

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
    this.allowSubmit = this.buyer.name != null && this.buyer.name != "";

  }

}
