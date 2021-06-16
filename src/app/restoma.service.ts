
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RestomaService {
  url = "http://localhost:3000/resturants"

  constructor(private http:HttpClient) { }
  getList() {
     return this.http.get(this.url)
  }
}

