import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ClickCounterComponent } from '../click-counter/click-counter.component';
import { LanguagesComponent } from "../languages/languages.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent, ClickCounterComponent, LanguagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

ngAfterViewInit(): void {
    setInterval(() => {
        document.querySelector(".landing-content > h1")?.classList.add('light-onload');
        const img = document.querySelector("img");
        if(img){
          img.style.opacity = "1";
        }
    }
    ,2000) // 2000
    setInterval(() => {
      const p = document.querySelector("p");
      if(p){
        p.style.opacity = "1";
      }

    }, 4000) // 4000
}
}
