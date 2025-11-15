import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [TranslatePipe, NgOptimizedImage],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {

}
