import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { MatGridList } from '@angular/material/grid-list';
import { MatButton } from "@angular/material/button";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from "./components/gallery/gallery.component";
import { SinglePictureComponent } from "./components/single-picture/single-picture.component";
import { MatIcon } from "@angular/material/icon";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        LandingPageComponent,
        NotFoundComponent,
        GalleryComponent,
        NotFoundComponent,
        SinglePictureComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreRoutingModule,
        MatGridList,
        MatButton,
        MatIcon
    ],
    providers: [
    ],
    exports: [
        LandingPageComponent,
        NotFoundComponent,
        GalleryComponent,
        NotFoundComponent,
        SinglePictureComponent
    ]
})
export class CoreModule {

}