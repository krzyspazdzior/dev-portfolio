import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    copyToClipboard(text: string, event: MouseEvent) {
      const target = event.target as HTMLElement;
      const originalText = target.innerText;
      target.innerText = 'Copied!';
      
      navigator.clipboard.writeText(text).then(() => {
        setTimeout(() => {
          target.innerText = originalText;
        }, 1000);
      }).catch(err => {
        console.error('Nie udało się skopiować do schowka:', err);
        target.innerText = originalText;
      });
    }
}
