import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  model: any = {'menuProductId': 'test'};

  constructor() { }

  ngOnInit() {
    this.model['testAttr'] = 'test';
  }

  public addOrder() {
    console.log('Pizza add order');
    console.log('AddOrder: ' + JSON.stringify(this.model));
  }

}
