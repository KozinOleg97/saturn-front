import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from "@angular/router";
import {Deal} from "../../../data-types/Deal";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DealsService} from "../deals.service";

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {

  constructor(private dealsService: DealsService, private router: Router) {
  }

  dealList: Deal[];

  dataSource: MatTableDataSource<Deal>;
  displayedColumns: string[] = [
    `buyer_name`, `buyer_surname`, `buyer_acronym`, `buyer_phone`,
    `seller_name`, `seller_surname`, `seller_acronym`, `seller_phone`,
    `district_name`,
    `profit`];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getDealsList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private getDealsList() {
    this.dealsService.getDealList().subscribe(data => {

        this.dealList = data;

        this.dataSource = new MatTableDataSource(this.dealList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error => console.log(error))
  }

  dealDetails(id: number) {
    // this.router.navigate(['deal-edit', id])


  }

  dealDelete(id: number) {

  }

}
