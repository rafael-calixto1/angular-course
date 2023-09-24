import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})


export class SalesPersonListComponent implements OnInit{

 salesPersonList: SalesPerson[] = [
  new SalesPerson("Anup", "Rafael", "dsenvolvenodo@x.com", 3000),
  new SalesPerson("de", "Rafael", "dsenvolvenodo@x.com", 7000),
  new SalesPerson("calixto", "Rafael", "dsenvolvenodo@x.com", 6000),
  new SalesPerson("rafael", "Rafael", "dsenvolvenodo@x.com", 4000),
 ]



constructor(){
}

ngOnInit(): void {
}

}
