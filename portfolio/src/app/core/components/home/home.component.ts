import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ClickCounterComponent } from '../click-counter/click-counter.component';
import { LanguagesComponent } from "../languages/languages.component";
import { GalleryComponent } from "../gallery/gallery.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent, ClickCounterComponent, LanguagesComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

ngAfterViewInit(): void {
    // setTimeout(() => {
    //     document.querySelector(".landing-content > h1")?.classList.add('light-onload');
    //     const img = document.querySelector("img");
    //     if(img){
    //       img.style.opacity = "1";
    //     }
    // }
    // ,1000) // 2000
    // setTimeout(() => {
    //   const btns = document.querySelector("button-wrapper");
    //   if(btns){
    //     (btns as HTMLElement).style.opacity = "1";
    //   }

    // }, 2000) // 4000
}
}
