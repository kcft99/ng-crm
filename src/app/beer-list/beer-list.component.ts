import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Beer } from '../core/models/beer.model';
import { NgForm, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: Array<Object> = [];
  constructor(private apiService: APIService) { }
  beerForm: FormGroup;
  beerName: String = 'test';


  ngOnInit() {
    this.getBeers();
    console.log('Beerlist works!');
    this.beerName = 'testBeer';
    this.beerForm = new FormGroup({
      menuProductIds: new FormControl(),
      menuProductName: new FormControl()
    });
  }

  public getBeers() {
    this.apiService.getBeers().subscribe((data: Array<Object>) => {
      this.beers = data;
    });

  }

  public orderBeer() {
    console.log('order beer');
    console.log(this.beerForm.value);
    const jsonOrder = this.beerForm.getRawValue();
    const serializedForm = JSON.stringify(jsonOrder);
    this.apiService.addOrder(jsonOrder).subscribe((data: Array<Object>) => {
      console.log(data);
    }

    );
  }

}
