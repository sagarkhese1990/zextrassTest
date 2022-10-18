import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  @ViewChild('navigationTab', { static: false })
  public navigationTab!: ElementRef<HTMLInputElement>;
  @Input() inputParams: any;
  @Output() outputParams = new EventEmitter();
  player = new Audio;
  showPauseBtn: boolean = false;
  playedMusicId: any;
  currentTime: number = 0;
  duration: number = 0;
  elapsedTime: number = 0;
  readonly NEXT = 'next';
  readonly PREV = 'prev';
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log(this.inputParams);

  }
  convertBase64(base64Image: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64Image);
  }
  playMusic(id: Number) {
    this.elapsedTime = 0;
    this.playedMusicId = id;
    this.showPauseBtn = true;
    this.player.src = '../../../../../assets/audio/horse.ogv';
    this.player.play();

    this.player.addEventListener("timeupdate", (currentTime) => {
      // Code to update progress bar goes here
      this.currentTime = this.player.currentTime;
      this.duration = this.player.duration;
      this.elapsedTime = (100 / this.duration) * this.currentTime;
    });

  }
  stopMusic(id: Number) {
    this.playedMusicId = null;
    this.showPauseBtn = false;
    this.player.pause();
  }
  goTo(direction: String) {
    if (direction === this.NEXT){
      this.navigationTab.nativeElement.scrollTo(
        { left: (this.navigationTab.nativeElement.scrollLeft + 200), behavior: 'smooth' }
      );
    } else if(direction === this.PREV){
      this.navigationTab.nativeElement.scrollTo(
        { left: (this.navigationTab.nativeElement.scrollLeft - 200), behavior: 'smooth' }
      );
    }
  }
}
