import { Component, ViewChild, ElementRef} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-click-counter',
  imports: [NgIf],
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent{

@ViewChild('cableSvg', { static: false }) cableSvg!: ElementRef<SVGElement>;

loading = false;
loadingProgress = 0;

startLoading() {
    if (this.loading) return;
    this.loading = true;
    this.loadingProgress = 0;
setTimeout(() => {
    const interval = setInterval(() => {
        this.loadingProgress += 2;
        if (this.loadingProgress >= 100) {
            clearInterval(interval);
            this.loadingProgress = 100;
        }
    }, 50);
}


, 1500);
}

onButtonClick() {
  if (!this.cableSvg) return;
  const svgEl = this.cableSvg.nativeElement;
  
  const buttonFront = document.querySelector(".front");
  const button = document.querySelector(".pushable");
  if(button && buttonFront){
    button.classList.add("pressed");
    setTimeout(() => button.classList.add("button-clicked-2"), 25)
    buttonFront.classList.add("button-clicked");
  }

  const monitor = document.querySelector(".monitor");
  if(monitor){
      setTimeout(() => monitor.classList.add("monitor-glow"), 4500);

  }
  const img = document.querySelector(".monitor img");
  if(img){
          setTimeout(() => img.classList.add("img-glow"), 4500);

  }

  svgEl.classList.add('glow');
  svgEl.classList.add('fill');


  this.startLoading()
}
}
