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
    links: string[] = ['dribble-music.com', 'carematch.com', 'rhytmify.com', 'fervo.com', 'rescript.dev'];
    hrefs = [];
    activeIndex: number = 0
    activeTabs: number = 4;
    closedTabs: boolean[] = new Array(this.titles.length).fill(false);
    input = this.links[0];


    tabPresets: any = {
      home: {
        title: 'Home',
        icon: 'images/home_icon.webp',
        img: 'home',
        imgPhone: 'home',
        link: ''
      },
      dribblemusic: {
        title: 'Dribble Music',
        icon: 'images/dribble_icon.png',
        img: 'images/dribble_pc.png',
        imgPhone: 'images/dribble_mobile.png',
        link: 'dribble-music.com'
      },
      carematch: {
        title: 'CareMatch',
        icon: 'images/carematch_icon.png',
        img: 'images/carematch_pc.png',
        imgPhone: 'images/carematch_mobile.png',
        link: 'carematch.com'
      },
      rhytmify: {
        title: 'Rhytmify',
        icon: 'images/rythmify_icon.png',
        img: 'images/rythmify_pc.png',
        imgPhone: 'images/rythmify_mobile.png',
        link: 'rhytmify.com'
      },
      fervocasino: {
        title: 'Fervo Casino',
        icon: 'images/fervo_icon.png',
        img: 'images/fervo_pc.png',
        imgPhone: 'images/fervo_mobile.png',
        link: 'fervo.com'
      },
      rescript: {
        title: 'Rescript',
        icon: 'images/rescript_icon.png',
        img: 'images/rescript_pc.png',
        imgPhone: 'images/rescript_mobile.png',
        link: 'rescript.dev'
      }
    };


    setActive(i:number){
      this.activeIndex = i;
      this.input = this.links[i];
    }

    close(i: number){
      this.activeTabs--
      const tab = document.querySelectorAll('.tab')[i];

      this.closedTabs[i] = true;
      this.activeIndex = this.activeIndex -1;
      setTimeout(() => {
        tab.classList.add("closed-display");
      }, 300)
    }

    addTab(type: string){

      const preset = this.tabPresets[type];
      if (!preset) return;

      const newIndex = this.activeTabs + 1;

      this.titles.push(preset.title);
      this.icons.push(preset.icon);
      this.imgs.push(preset.img);
      this.imgsPhone.push(preset.imgPhone);
      this.links.push(preset.link);
      this.closedTabs.push(false);

      this.closedTabs.push(false);

      this.activeIndex = newIndex;
      this.input = this.links[newIndex];
    }
  

    search(){
      this.links.forEach((link, index) => {
        if(link === this.input){
          this.activeIndex = index;
        }
      });
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
