import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  imports: [TranslatePipe, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

   currentLang: string = 'en'; // domyślny język

  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang');
      if (lang) {
        this.currentLang = lang;
        this.translate.use(lang);
      }
    }
  }

  switchLang(event: Event) {
    if (typeof window !== 'undefined') {
      const select = event.target as HTMLSelectElement;
      const lang = select.value;
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
      this.currentLang = lang; // aktualizacja klasy, aby HTML widział zmianę
    }
  }

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
    burgerOn: boolean = false;

  burgerToggle() {
    const burger = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");
    if (!burger) return;
    if (!menu) return;

    if (this.burgerOn) {
      burger.classList.remove("change");
      menu.classList.remove("menu-active");
      this.burgerOn = false;
    } else {
      burger.classList.add("change");
      menu.classList.add("menu-active");
      this.burgerOn = true;
    }
}

}
