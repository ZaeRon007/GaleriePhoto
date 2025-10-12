import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { SinglePictureComponent } from "./components/single-picture/single-picture.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/view/:name', component: SinglePictureComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {

}