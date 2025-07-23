import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  newForm: any = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  form = this.newForm

  onSubmit() {
    const {name, email, phone, message} = this.form;
    const subject = `${name} || ${email} || ${phone}`
    const body = `Hello, I'm Mr. ${name}, ${message}`;
    const mailtoLink = `mailto:surinder.saini2050@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    this.form = this.newForm;
  }

}
