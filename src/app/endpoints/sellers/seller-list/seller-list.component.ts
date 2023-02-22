import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SellersService} from "../sellers.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Seller} from "../../../data-types/Seller";

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit{

  constructor(private sellersService:SellersService, private router:Router) {
  }


  sellerList: Seller[];

  dataSource: MatTableDataSource<Seller>;
  displayedColumns: string[] = [`name`, `surname`, `acronym`, `apartment_area`, `price`, `action_edit`];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getSellerList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private getSellerList() {
    this.sellersService.getSellerList().subscribe(data =>{
        this.sellerList = data;

        // console.log(this.sellerList);

        this.dataSource = new MatTableDataSource(this.sellerList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error => console.log(error))
  }

  sellerDetails(id:number) {
    this.router.navigate(['seller-edit', id])


  }



}
