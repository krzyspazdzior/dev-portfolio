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

    const interval = setInterval(() => {
        this.loadingProgress += 2;
        if (this.loadingProgress >= 100) {
            clearInterval(interval);
            this.loadingProgress = 100;
        }
    }, 50);
}

onButtonClick() {
  if (!this.cableSvg) return;
  const svgEl = this.cableSvg.nativeElement;

  const monitor = document.querySelector(".monitor");
  if(monitor){
      setTimeout(() => monitor.classList.add("monitor-glow"), 3000);

  }
  const img = document.querySelector(".monitor img");
  if(img){
          setTimeout(() => img.classList.add("img-glow"), 3000);

  }

  svgEl.classList.add('glow');
  this.startLoading()
}
}
