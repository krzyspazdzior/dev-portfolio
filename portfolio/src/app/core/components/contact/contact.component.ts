import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [NgClass, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit{
  
  
  contactForm!: FormGroup ;
  
  constructor(private fb: FormBuilder, private translate: TranslateService, private http: HttpClient) {}

    ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      content: ['', Validators.required]
    });
  }



onSubmit(event: Event){
  event.preventDefault();

  this.contactForm.markAllAsTouched();

  const validatorP = document.getElementById("validator");

  if(this.contactForm.invalid){
    if(validatorP) {
      validatorP.classList.add('validator-wrong');
      validatorP.innerHTML = this.translate.instant('CONTACT.INCORRECT');
    }
    return;
  }

  this.launchRocket();

  const formspreeEndpoint = 'https://formspree.io/f/xqayoyle';

  this.http.post(formspreeEndpoint, this.contactForm.value).subscribe({
    next: () => {
      if(validatorP) {
        validatorP.classList.remove('validator-wrong');
        validatorP.classList.add('validator-valid');
        validatorP.innerHTML = this.translate.instant('CONTACT.CORRECT');
      }
      this.contactForm.reset();
    },
    error: () => {
      if(validatorP) {
        validatorP.classList.add('validator-wrong');
        validatorP.innerHTML = this.translate.instant('CONTACT.INCORRECT');
      }
    }
  });

  console.log(this.contactForm);
}


rocketFlying = false;
  launchRocket() {
    this.rocketFlying = true; 
  }


  cardTransform = '';

onCardMove(event: MouseEvent) {
  const card = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const centerX = card.left + card.width / 2;
  const centerY = card.top + card.height / 2;

  const offsetX = (event.clientX - centerX) / (card.width / 2);
  const offsetY = (event.clientY - centerY) / (card.height / 2);

  const rotateX = offsetY * -17; // nachylenie góra/dół
  const rotateY = offsetX * 17;  // nachylenie lewo/prawo

    this.cardTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY + 180}deg)`;
    this.cardTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

resetCard() {{
    this.cardTransform = `perspective(1000px) rotateX(6deg) rotateY(-6deg)`;
  }
}

}
