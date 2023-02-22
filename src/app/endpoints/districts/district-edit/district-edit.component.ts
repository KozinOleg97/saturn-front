import {Component, OnInit} from '@angular/core';
import {DistrictsService} from "../districts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {District} from "../../../data-types/District";

@Component({
  selector: 'app-district-edit',
  templateUrl: './district-edit.component.html',
  styleUrls: ['./district-edit.component.css']
})
export class DistrictEditComponent implements OnInit {

  constructor(private districtsService: DistrictsService, private router: Router, private curRoute: ActivatedRoute) {
  }


  id: number;
  district: District = new District();

  allowSubmit: boolean = true;

  ngOnInit(): void {
    this.id = this.curRoute.snapshot.params["id"];


    this.getDistrictByID();


  }

  private getDistrictByID() {


    this.districtsService.getDistrict(this.id).subscribe(data => {
      this.district = data;
      // console.log(data);


    }, error => console.log(error))
  }

  updateData() {
    this.districtsService.updateDistrict(this.id, this.district).subscribe(data => {
      this.getDistrictByID()

    }, error => console.log(error))

  }

  delete() {
    this.districtsService.deleteDistrict(this.id).subscribe(data => {
      this.router.navigate(['district-list'])

    }, error => console.log(error))

  }

  onSubmit() {
    this.updateData()
  }

  onChange() {
    this.allowSubmit = this.district.name != null && this.district.name != "";

  }
}
