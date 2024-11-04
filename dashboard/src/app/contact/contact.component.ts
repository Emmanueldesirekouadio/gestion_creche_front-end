import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Logique pour envoyer le message (API, service, etc.)
    console.log('Form submitted!');
  }
}
