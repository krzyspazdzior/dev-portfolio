import { Component } from '@angular/core';
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
 
  
  tabs = [
  { 
    id: 0, 
    title: 'Home', 
    icon: 'images/home_icon.webp', 
    img: 'home', 
    imgPhone: 'home', 
    link: '', 
    closed: false 
  }
];

  
  activeIndex: number = 0;
  input = '';
  
  tabPresets: any = {
    home: {
      id: -1,
      titleValue: 'home',
      title: 'Home',
      icon: 'images/home_icon.webp',
      img: 'home',
      imgPhone: 'home',
      link: ''
    },
    empty: {
      id: -1,
      titleValue: 'empty',
      title: 'Not Found',
      icon: 'images/blank.webp',
      img: 'empty',
      imgPhone: 'empty',
      link: ''
    }, 
    dribblemusic: {
      id: -1,
      titleValue: 'dribble music',
      title: 'Dribble Music',
      icon: 'images/dribble_icon.png',
      img: 'images/dribble_pc.png',
      imgPhone: 'images/dribble_mobile.png',
      link: 'https://dribble-music.com'
    },
    carematch: {
      id: -1,
      titleValue: 'carematch',
      title: 'CareMatch',
      icon: 'images/carematch_icon.png',
      img: 'images/carematch_pc.png',
      imgPhone: 'images/carematch_mobile.png',
      link: 'https://carematch.com'
    },
    rhytmify: {
      id: -1,
      titleValue: 'rhytmify',
      title: 'Rhytmify',
      icon: 'images/rythmify_icon.png',
      img: 'images/rythmify_pc.png',
      imgPhone: 'images/rythmify_mobile.png',
      link: 'https://rhytmify.com'
    },
    fervocasino: {
      id: -1,
      titleValue: 'fervo',
      title: 'Fervo Casino',
      icon: 'images/fervo_icon.png',
      img: 'images/fervo_pc.png',
      imgPhone: 'images/fervo_mobile.png',
      link: 'https://fervo-casino.com'
    },
    rescript: {
      id: -1,
      titleValue: 'rescript',
      title: 'Rescript',
      icon: 'images/rescript_icon.png',
      img: 'images/rescript_pc.png',
      imgPhone: 'images/rescript_mobile.png',
      link: 'https://rescript.dev'
    }
  };
  
 homeButtonPresets = [
  { ...this.tabPresets.dribblemusic, id: 1 },
  { ...this.tabPresets.carematch, id: 2 },
  { ...this.tabPresets.rhytmify, id: 3 },
  { ...this.tabPresets.fervocasino, id: 4 },
  { ...this.tabPresets.rescript, id: 5 }
];
  
  setActive(tab: any) {
    const i = this.tabs.indexOf(tab);
  if (i >= 0 && !tab.closed) {
    this.activeIndex = i;
    this.input = tab.link;
  }
  }

  close(tab: any) {
    const i = this.tabs.indexOf(tab)
    if (i < 0 || i >= this.tabs.length || this.tabs[i].closed) return;

    this.tabs[i].closed = true;

    if (this.activeIndex === i) {
      let newActive = this.tabs.findIndex((tab, idx) => !tab.closed && idx > i);

      if (newActive === -1) {
        for (let idx = i - 1; idx >= 0; idx--) {
          if (!this.tabs[idx].closed) {
            newActive = idx;
            break;
          }
        }
      }

      if (newActive === -1) {
        this.addTab('home');
        this.activeIndex = this.tabs.length - 1;
        this.input = this.tabs[this.activeIndex].link;
      } else {
        this.activeIndex = newActive;
        this.input = this.tabs[newActive].link;
      }
    }
    setTimeout(() => {
      const tabElement = document.querySelector(`.tab[data-id="${tab.id}"]`);
      if (tabElement) {
        tabElement.classList.add('closed-after');
      }
    }, 300);
  }

  addTab(type: string) {
    const preset = this.tabPresets[type];
    if (!preset) return;

    const newId = this.tabs.length > 0 ? Math.max(...this.tabs.map(t => t.id)) + 1 : 0;

    const newTab = {
      id: newId,
      title: preset.title,
      icon: preset.icon,
      img: preset.img,
      imgPhone: preset.imgPhone,
      link: preset.link,
      closed: false
    };

    this.tabs.push(newTab);
    this.activeIndex = this.tabs.length - 1;
    this.input = newTab.link;
  }

  updatePreset(type: string) {
    if (this.activeIndex < 0 || this.activeIndex >= this.tabs.length) return;
    let result = ""
    const trimmedType = type.split('.')[0].replace("-", "")
    if(trimmedType[0] == "h" && trimmedType[1] == "t"){
      result = trimmedType.slice(8);
    }else{
      result = trimmedType;
    }
    const preset = this.tabPresets[result];

    const tab = this.tabs[this.activeIndex];

    if (!preset) {
      tab.title = this.tabPresets.empty.title;
      tab.icon = this.tabPresets.empty.icon;
      tab.img = this.tabPresets.empty.img;
      tab.imgPhone = this.tabPresets.empty.imgPhone;
      tab.link = this.tabPresets.empty.link;
      this.input = '';
      return;
    }

    tab.title = preset.title;
    tab.icon = preset.icon;
    tab.img = preset.img;
    tab.imgPhone = preset.imgPhone;
    tab.link = preset.link;

    this.input = tab.link;
  }

  refresh() {
    const img = document.querySelector(".active-img");
    if (img) {
      img.classList.add("img-refreshed");
      setTimeout(() => {
        img.classList.remove("img-refreshed");
      }, 60);
    }
  }

  menuClick() {
    const menu = document.querySelector("#menu");
    const dropdown = document.querySelector(".dropdown");

    if (menu && dropdown) {
      if (dropdown.classList.contains("dropdown-active")) {
        dropdown.classList.remove("dropdown-active");
        menu.classList.remove("menu-bg");
      } else {
        dropdown.classList.add("dropdown-active");
        menu.classList.add("menu-bg");
      }
      menu.classList.add("active-menu");
    }
  }
}
