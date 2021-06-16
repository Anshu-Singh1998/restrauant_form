import { Component, OnInit } from '@angular/core';
import { RestomaService } from '../restoma.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private resto: RestomaService) { }
  collection:any;

  ngOnInit(): void {
    //  console.warn("some data")
    this.resto.getList().subscribe((result: any) => {
      console.warn(result);
      this.collection=result;
    })

  }

}
