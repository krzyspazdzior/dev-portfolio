import { Component, ViewChild, ElementRef} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-click-counter',
  imports: [NgIf, TranslatePipe],
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent{

@ViewChild('cableSvg', { static: false }) cableSvg!: ElementRef<SVGElement>;

loading = false;
loadingProgress = 0;
terminalLines = [
  "> Initializing portfolio assets...",
  "> Loading projects...",
  "> Compiling creativity...",
  "> Injecting caffeine into main thread...",
  "> Connecting neural interface...",
  "> Rendering pixel-perfect designs...",
  "> Deploying innovation protocol...",
  "> Syncing AI-driven components...",
  "> Optimizing user engagement rate...",
  "> Boot sequence complete. Welcome, operator.",
  "> Establishing visual uplink...",
  "> Activating motion subsystems...",
  "> Calibrating code aesthetics...",
  "> Importing neural style presets...",
  "> Engaging responsive framework...",
  "> System ready for interaction."
]

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
    setTimeout(() => {
      info.innerHTML = "";
    }, 1700)
  }
 
const terminal = document.getElementById("terminal");
if(terminal){
  setTimeout(() => {
    for(let i=0; i<this.terminalLines.length;i++){
      setTimeout(() => {terminal.innerHTML += this.terminalLines[i] + "<br>";}, 350 * i) 
      
    }
      
    }, 1700)
    setTimeout(() => terminal.innerHTML = "", 8100);
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
