import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  currentLang = localStorage.getItem('lang');

  constructor(private translate: TranslateService) {}

  switchLang(event: Event) {
    const select = event.target as HTMLSelectElement;
    
    
    const lang = select.value;
    this.translate.use(lang);
    localStorage.setItem('lang', lang); 
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


}
