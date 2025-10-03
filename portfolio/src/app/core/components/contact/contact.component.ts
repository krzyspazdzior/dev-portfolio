import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit{
  
  
  contactForm!: FormGroup ;
  
  constructor(private fb: FormBuilder) {}

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
  
  const validatorP = document.getElementById("validator");
  this.contactForm.markAllAsTouched();


  
  if(this.contactForm.invalid){
    validatorP?.classList.add('validator-wrong');
    (validatorP as HTMLElement).innerHTML = "Fill all fields correctly.";
    return;
  }
  
    this.launchRocket();  
    validatorP?.classList.add("validator-valid");
    (validatorP as HTMLElement).innerHTML = "Form submitted successfully!"
    console.log(this.contactForm);
    this.contactForm.reset();
  

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
