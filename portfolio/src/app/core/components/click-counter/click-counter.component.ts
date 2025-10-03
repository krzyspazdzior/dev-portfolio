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
    }, 100);
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

  const info = document.querySelector(".screen-info");

  if(info){
    let dots = "";
    let infoEnd = false;
    setTimeout(() => infoEnd = true, 6900);
    setTimeout(() => {
    const loadingText = setInterval(() => {
        
        if(dots.length == 3){
          dots = ""
        }else{
          dots += ".";
        }
        if(infoEnd == false){
          info.innerHTML = "LOADING" + dots;
        }else{
          clearInterval(loadingText);
          info.innerHTML = "READY!";
          info.classList.add("info-ready")
          setTimeout(() => info.innerHTML = "", 1500);
        }
      }, 600)
    }, 1175)
  }

  const monitor = document.querySelector(".monitor");
  if(monitor){
      setTimeout(() => monitor.classList.add("monitor-glow"), 8100);

  }
  const img = document.querySelector(".monitor img");
  const screen = document.querySelector(".monitor .screen");
  if(img && screen){
          setTimeout(() => img.classList.add("img-glow"), 8100);
          setTimeout(() => screen.classList.add("active-screen"), 8100);

  }

  svgEl.classList.add('glow');
  svgEl.classList.add('fill');


  this.startLoading()
}
}
