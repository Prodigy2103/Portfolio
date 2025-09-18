import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  // Variablen, um die Formulardaten zu speichern
  name: string = '';
  email: string = '';
  message: string = '';
  isPrivacyAccepted: boolean = false;
  emailSent: boolean = false; // Variable für den Erfolgsstatus

  onSubmit() {
    if (this.isPrivacyAccepted) {
      console.log('Datenschutzrichtlinie akzeptiert. E-Mail-Nachricht wird simuliert.');
      
      // Hier wird die Logik direkt ausgeführt, ohne einen Backend-Aufruf
      // Du kannst hier eine kleine Verzögerung einfügen, um den Versand zu simulieren
      setTimeout(() => {
        this.emailSent = true; // Setzt die Variable auf `true` nach 1 Sekunde
        console.log('Erfolgsmeldung wird angezeigt.');
      }, 1000); // 1000 ms = 1 Sekunde
    } else {
      console.log('Datenschutzrichtlinie nicht akzeptiert.');
    }
  }
}
