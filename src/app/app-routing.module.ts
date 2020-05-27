import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './views/main-content/main-content.component';
import { OurStoryComponent } from './views/our-story/our-story.component';


const routes: Routes = [
  //{ path: "", redirectTo: "/main", pathMatch: "full" },
  { path: '', component: MainContentComponent },
  { path: 'story', component: OurStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
