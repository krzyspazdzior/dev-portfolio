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
    // Rejestracja języków
    this.translate.addLangs(['en', 'pl']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');

  }

  // Zmiana języka z przycisku
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}