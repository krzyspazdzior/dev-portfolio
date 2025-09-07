import { Component, OnInit, AfterViewInit } from '@angular/core';
import { After } from 'node:v8';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{
  ngOnInit(){
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const navA = document.querySelectorAll('.nav-link');
        const headerBtn = document.querySelector('.login-btn');
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(header && headerBtn){
      if (scrollTop > 0) {
      header.classList.add('nav-scroll-scroll');
      headerBtn.classList.add('nav-login-scroll')
      navA.forEach((aElem) =>
        aElem.classList.add('nav-a-scroll')
    )
          } else {
              header.classList.remove('nav-scroll-scroll');
              headerBtn.classList.remove('nav-login-scroll')
              navA.forEach((aElem) =>
                  aElem.classList.remove('nav-a-scroll')
              )
          }
    }
  
    });
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      const header = document.querySelector("header");
      if(header){
        header.style.opacity = "1";
      }
    }, 3000)
  }
}
