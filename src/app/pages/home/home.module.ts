import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicListComponent } from './components/music-list/music-list.component';


@NgModule({
  declarations: [
    HomeContainerComponent,
    SidebarComponent,
    HeaderComponent,
    MusicListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([{ path: '', component: HomeContainerComponent }])
  ]
})
export class HomeModule {
}
