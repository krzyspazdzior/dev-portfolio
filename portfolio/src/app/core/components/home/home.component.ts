import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ClickCounterComponent } from '../click-counter/click-counter.component';
import { LanguagesComponent } from "../languages/languages.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent, ClickCounterComponent, LanguagesComponent, GalleryComponent, ContactComponent, FooterComponent,TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
