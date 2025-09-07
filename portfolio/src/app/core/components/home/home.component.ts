import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
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
    ,2000)
    setInterval(() => {
      const p = document.querySelector("p");
      if(p){
        p.style.opacity = "1";
      }

    }, 4000)
}
}
