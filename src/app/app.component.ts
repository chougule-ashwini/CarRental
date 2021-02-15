import { Component, OnInit } from '@angular/core';
import cars_data from './data';



export class APIService {

  private data: any;

  constructor() {
    this.data = cars_data
  }

  public getCars() {
    return this.data;
  }

  public getCar(id: number) {
    return this.getCars().filter((c) => (c.id === id));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent implements OnInit {

  // your code here
  public selectedCar: any = null;
  public cars: any;
  public duration: number = 12;
  public name: any = "";
  public email: string="";
  public mobile: string="";
  constructor(public api: APIService) { }
  ngOnInit() {
    this.cars = this.api.getCars();
  }
  submit() {
    if (this.name =! "" && this.email != "" && this.mobile != "" ) {
      alert('Success!');
      this.selectedCar = null;
      this.name = "";
      this.email = "";
      this.duration = 0;
      this.mobile = "";
    } else {
      alert("Fill the details.");
    }
  }
}
