import {Component, OnInit, ViewChild} from '@angular/core';
import {DistrictsService} from "../districts.service";
import {Router} from "@angular/router";
import {District} from "../../../data-types/District";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit{
  constructor(private districtsService:DistrictsService, private router:Router) {
  }

  districtList: District[];

  dataSource: MatTableDataSource<District>;


  displayedColumns: string[] = [`name`, `action_edit`];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getDistrictsList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private getDistrictsList() {
    this.districtsService.getDistrictList().subscribe(data =>{
      this.districtList = data;

      // console.log(this.districtList);

      this.dataSource = new MatTableDataSource(this.districtList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    },
      error => console.log(error))
  }

  districtDetails(id:number) {
    this.router.navigate(['district-edit', id])


  }

  districtDelete( id: number) {

  }

}
