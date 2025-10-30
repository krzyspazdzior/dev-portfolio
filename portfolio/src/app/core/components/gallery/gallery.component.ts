import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [TranslatePipe, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    titles = ['Dribble Music', 'CareMatch', 'Rhytmify', 'Fervo Casino', 'Rescript']; 
    icons = ['images/dribble_icon.png', 'images/carematch_icon.png','images/rythmify_icon.png', 'images/fervo_icon.png', 'images/rescript_icon.png'];
    imgs = ['images/dribble_pc.png', 'images/carematch_pc.png', 'images/rythmify_pc.png', 'images/fervo_pc.png', 'images/rescript_pc.png'];
    imgsPhone = ['images/dribble_mobile.png', 'images/carematch_mobile.png', 'images/rythmify_mobile.png', 'images/fervo_mobile.png', 'images/rescript_mobile.png'];
    links: string[] = ['https://dribble-music.com', 'https://carematch.com', 'https://rhytmify.com', 'https://fervo-casino.com', 'https://rescript.dev'];
    hrefs = [];
    activeIndex: number = 0
    activeTabs: number = 4;
    closedTabs: boolean[] = new Array(this.titles.length).fill(false);
    input = this.links[0];


    tabPresets: any = {
      home: {
        titleValue: 'home',
        title: 'Home',
        icon: 'images/home_icon.webp',
        img: 'home',
        imgPhone: 'home',
        link: ''
      },
      dribblemusic: {
        titleValue: 'dribble music',
        title: 'Dribble Music',
        icon: 'images/dribble_icon.png',
        img: 'images/dribble_pc.png',
        imgPhone: 'images/dribble_mobile.png',
        link: 'https://dribble-music.com'
      },
      carematch: {
        titleValue: 'carematch',
        title: 'CareMatch',
        icon: 'images/carematch_icon.png',
        img: 'images/carematch_pc.png',
        imgPhone: 'images/carematch_mobile.png',
        link: 'https://carematch.com'
      },
      rhytmify: {
        titleValue: 'rhytmify',
        title: 'Rhytmify',
        icon: 'images/rythmify_icon.png',
        img: 'images/rythmify_pc.png',
        imgPhone: 'images/rythmify_mobile.png',
        link: 'https://rhytmify.com'
      },
      fervocasino: {
        titleValue: 'fervo',
        title: 'Fervo Casino',
        icon: 'images/fervo_icon.png',
        img: 'images/fervo_pc.png',
        imgPhone: 'images/fervo_mobile.png',
        link: 'https://fervo-casino.com'
      },
      rescript: {
        titleValue: 'rescript',
        title: 'Rescript',
        icon: 'images/rescript_icon.png',
        img: 'images/rescript_pc.png',
        imgPhone: 'images/rescript_mobile.png',
        link: 'https://rescript.dev'
      }
    };


    setActive(i:number){
      this.activeIndex = i;
      this.input = this.links[i];
    }
close(i: number) {
  this.closedTabs[i] = true;
  this.activeTabs--

  if (this.activeIndex === i) {
    // spróbuj znaleźć tab po prawej
    let newActive = this.closedTabs.findIndex((closed, idx) => !closed && idx > i);

    if(!this.closedTabs.includes(false)){
      this.addTab('home');
      this.activeIndex = 7;
    }
    // jeśli brak po prawej → spróbuj po lewej
    if (newActive === -1) {
      for (let idx = i - 1; idx >= 0; idx--) {
        if (!this.closedTabs[idx]) {
          newActive = idx;
          break;
        }
      }
            console.log(this.titles.length - 1)

    }

    // jeśli wciąż brak → wszystkie zamknięte → ustaw -1
    if (newActive === -1) {
      this.activeIndex = -1;
      this.input = '';
    } else {
      this.activeIndex = newActive;
      this.input = this.links[newActive];
    }
  }
}

    addTab(type: string){

      const preset = this.tabPresets[type];
      if (!preset) return;

      this.activeTabs++
      const newIndex = this.activeTabs;
      this.activeIndex = newIndex;

      this.titles.push(preset.title);
      this.icons.push(preset.icon);
      this.imgs.push(preset.img);
      this.imgsPhone.push(preset.imgPhone);
      this.links.push(preset.link);
      this.closedTabs.push(false);

      this.closedTabs.push(false);

      this.input = this.links[newIndex];

    }
    updatePreset(type: string){
      const trimmedType = type.split('.')[0].replace("-", "");   
      
      const preset = this.tabPresets[trimmedType];

      if (!preset) return;


      this.titles[this.activeIndex] = preset.title;
      this.icons[this.activeIndex] = preset.icon;
      this.imgs[this.activeIndex] = preset.img;
      this.imgsPhone[this.activeIndex] = preset.imgPhone;
      this.links[this.activeIndex] = preset.link;

    }


    refresh(){
      console.log(this.titles[0].toLowerCase().replace(' ', ''))
      const img = document.querySelector(".active-img");
      if(img){
        img.classList.add("img-refreshed");
        setTimeout(() => {
          img.classList.remove("img-refreshed");
        }, 60)
      }

    }

    menuClick() {
      const menu = document.querySelector("#menu");
      const dropdown = document.querySelector(".dropdown")
      
      if(menu && dropdown){
            if(dropdown.classList.contains("dropdown-active")){
              dropdown.classList.remove("dropdown-active");
              menu.classList.remove("menu-bg");
            }else{
              dropdown.classList.add("dropdown-active");
              menu.classList.add("menu-bg");

            }
            menu.classList.add("active-menu");
        }
    }
  }
