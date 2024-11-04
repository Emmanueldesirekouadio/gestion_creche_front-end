import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.connexionForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.connexionForm.valid) {
      // Logique pour traiter la connexion
      console.log('Connexion réussie !', this.connexionForm.value);
    }
  }
}

