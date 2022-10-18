import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '**',
  redirectTo: 'home',
},
  {
    path: 'home',
    loadChildren: async () => (await import('./pages/home/home.module')).HomeModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
