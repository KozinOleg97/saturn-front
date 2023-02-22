import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from "@angular/router";
import {Buyer} from "../../../data-types/Buyer";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BuyersService} from "../buyers.service";

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit{

  constructor(private buyersService:BuyersService, private router:Router) {
  }


  buyerList: Buyer[];

  dataSource: MatTableDataSource<Buyer>;
  displayedColumns: string[] = [`name`, `surname`, `acronym`, `apartment_area_min`, `apartment_area_max`, `price_max`, `action_edit`];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getBuyerList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private getBuyerList() {
    this.buyersService.getBuyerList().subscribe(data =>{
        this.buyerList = data;

        // console.log(this.buyerList);

        this.dataSource = new MatTableDataSource(this.buyerList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error => console.log(error))
  }

  buyerDetails(id:number) {
    this.router.navigate(['buyer-edit', id])


  }

}
