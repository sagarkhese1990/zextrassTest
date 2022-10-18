import { Injectable } from '@angular/core';
import { ApiService, HttpReqMethod } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private apiService: ApiService,
  ) { }
  public getSmarlistnerList() {
    const url = './assets/smart.json';
    return this.apiService.Request(url, HttpReqMethod.GET.toString());
  }
  public getRecentlyPlayedList() {
    const url = './assets/recent.json';
    return this.apiService.Request(url, HttpReqMethod.GET.toString());
  }
}
