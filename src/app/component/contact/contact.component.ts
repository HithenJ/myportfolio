import { Component } from '@angular/core';
import { profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profile = profile;
  submitted = false;
  sending = false;
  error = '';
  copied: 'email' | 'phone' | null = null;

  async copy(kind: 'email' | 'phone'): Promise<void> {
    const value = kind === 'email' ? this.profile.email : this.profile.phoneDisplay;
    try {
      await navigator.clipboard.writeText(value);
      this.copied = kind;
      setTimeout(() => {
        this.copied = null;
      }, 1800);
    } catch {
      this.error = 'Could not copy. Please select the text instead.';
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.sending = true;
    this.error = '';

    fetch('https://formsubmit.co/' + this.profile.email, {
      method: 'POST',
      body: formData
    }).then((response) => {
      if (response.ok) {
        this.submitted = true;
        form.reset();
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      } else {
        this.error = 'Something went wrong. Please try again or email me directly.';
      }
      this.sending = false;
    }).catch(() => {
      this.error = 'Failed to send. Check your connection, or email me directly.';
      this.sending = false;
    });
  }
}
