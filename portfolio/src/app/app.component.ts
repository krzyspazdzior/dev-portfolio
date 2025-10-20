import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    this.translate.addLangs(['en', 'pl']);
    this.translate.setFallbackLang('en');
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if(savedLang === 'en' || savedLang === 'pl'){
        this.translate.use(savedLang);
      } else {
        this.translate.use('en');
      }
    } else {
      this.translate.use('en');
    }

  }
}