import { Component } from '@angular/core';
import { profile, socials } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profile = profile;
  socials = socials;

  submitted = false;
  sending = false;
  error = '';
  copiedKind: 'email' | 'phone' | null = null;

  async copy(kind: 'email' | 'phone'): Promise<void> {
    const value = kind === 'email' ? this.profile.email : this.profile.phoneDisplay;
    try {
      await navigator.clipboard.writeText(value);
      this.copiedKind = kind;
      setTimeout(() => {
        this.copiedKind = null;
      }, 2000);
    } catch {
      this.error = 'Unable to copy text automatically.';
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
      this.sending = false;
      if (response.ok) {
        this.submitted = true;
        form.reset();
        setTimeout(() => {
          this.submitted = false;
        }, 6000);
      } else {
        this.error = 'Failed to submit form. Please send a direct email to ' + this.profile.email;
      }
    }).catch(() => {
      this.sending = false;
      this.error = 'Network error. Please reach out directly via ' + this.profile.email;
    });
  }
}
