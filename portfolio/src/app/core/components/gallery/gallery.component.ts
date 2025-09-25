import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    titles = ['Dribble Music', 'CareMatch', 'Rythmify', 'Fervo Casino', 'Rescript']; 
    icons = ['images/dribble_icon.png', 'images/carematch_icon.png','images/rythmify_icon.png', 'images/fervo_icon.png', 'images/rescript_icon.png'];
    imgs = ['images/dribble_pc.png', 'images/carematch_pc.png', 'images/rythmify_pc.png', 'images/fervo_pc.png', 'images/Rescript_pc.png'];
    links = ['dribble-music.com', 'carematch.com', 'rythmify.com', 'fervo.com', 'rescript.dev'];
    activeIndex: number = 0

    setActive(i:number){
      this.activeIndex = i;
    }
  }

