import { Component, HostBinding } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  smartListnerData: Array<any> = [];
  recentlyPlayed: Array<any> = []
  default: any = {
    smartListnerList: [],
    recentlyPlayedList: []
  }
  constructor(
    private homeService: HomeService
  ) {

  }
  ngOnInit(): void {
    this.getSmartListnerListing();
    this.getRecentlyPlayedListing();
  }
  handleOuputParams(event: any) {
    
  }
  getSmartListnerListing() {
    this.homeService.getSmarlistnerList()?.subscribe(response => {
      if (response) {
        this.smartListnerData = response;
        this.default.smartListnerList = this.smartListnerData;
      }
    })
  }
  getRecentlyPlayedListing() {
    this.homeService.getRecentlyPlayedList()?.subscribe(response => {
      if (response) {
        this.recentlyPlayed = response;
        this.default.recentlyPlayedList = this.recentlyPlayed;
      }
    })
  }
  handleHeaderOuputParams(event: any) {
    if (event.isSearch) {
      this.filterDropDowns(event.value);
    }

  }
  filterDropDowns(query: any): any {
    if (query != undefined) {
      this.smartListnerData = this.default.smartListnerList.filter(
        (val: any) => val.artist.toLowerCase().trim().includes(query.toLowerCase().trim())
      );
      this.recentlyPlayed = this.default.recentlyPlayedList.filter(
        (val: any) => val.artist.toLowerCase().trim().includes(query.toLowerCase().trim())
      );
    }
  }
}
