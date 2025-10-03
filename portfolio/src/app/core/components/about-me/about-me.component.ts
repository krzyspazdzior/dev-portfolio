import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements AfterViewInit{
  @ViewChildren('articleWrapper') articles!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.articles.forEach(art => {
      (art.nativeElement as HTMLElement).classList.add('animate');
    })
  }
}
