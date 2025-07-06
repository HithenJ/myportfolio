import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent   {
 submitted = false;
  sending = false;

  onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.sending = true;

    fetch('https://formsubmit.co/hithenjessu@gmail.com', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        this.submitted = true;
        form.reset();
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
      this.sending = false;
    }).catch(() => {
      alert('Failed to send message. Please check your connection.');
      this.sending = false;
    });
  }
}