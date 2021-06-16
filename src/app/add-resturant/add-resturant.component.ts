import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {

  constructor() { }
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')

  })
  ngOnInit(): void {
  }
  collectData(){
    console.warn(this.addResto.value)
  }
}
