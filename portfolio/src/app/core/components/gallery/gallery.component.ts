import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    titles = ['Dribble Music', 'CareMatch', 'Rhytmify', 'Fervo Casino', 'Rescript']; 
    icons = ['images/dribble_icon.png', 'images/carematch_icon.png','images/rythmify_icon.png', 'images/fervo_icon.png', 'images/rescript_icon.png'];
    imgs = ['images/dribble_pc.png', 'images/carematch_pc.png', 'images/rythmify_pc.png', 'images/fervo_pc.png', 'images/rescript_pc.png'];
    links = ['dribble-music.com', 'carematch.com', 'rhytmify.com', 'fervo.com', 'rescript.dev'];
    hrefs = [];
    activeIndex: number = 0

    setActive(i:number){
      this.activeIndex = i;
    }

    refresh(){
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

