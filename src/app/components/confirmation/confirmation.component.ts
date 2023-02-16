import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'order-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 
  full_name: String = '';

  @Input()
  total: Number = 0;

  constructor(private router:Router,private route: ActivatedRoute){}

  public backToProduct(){
    this.router.navigateByUrl('/product-list')
  }

  public ngOnInit(): void {
    this.full_name = this.route.snapshot.queryParams?.['full_name'];
    this.total = this.route.snapshot.queryParams?.['total'];
  }
}
