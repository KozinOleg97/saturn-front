import {Component, OnInit} from '@angular/core';
import {DistrictsService} from "../districts.service";
import {District} from "../../../data-types/District";
import {Router} from "@angular/router";

@Component({
  selector: 'app-district-add',
  templateUrl: './district-add.component.html',
  styleUrls: ['./district-add.component.css']
})


export class DistrictAddComponent implements OnInit{

  constructor(private districtsService:DistrictsService, private router:Router) {
  }


  district: District = new  District();
  allowSubmit: boolean = false;

  ngOnInit(): void {

  }


  onChange() {
    this.allowSubmit = this.district.name != null && this.district.name != "";

  }



  onSubmit() {
    this.districtsService.addDistrict(this.district).subscribe(data =>{
      this.router.navigate(['district-list'])

    },error => console.log(error))
  }
}
