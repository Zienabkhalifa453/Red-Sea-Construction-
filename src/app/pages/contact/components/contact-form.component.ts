import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
      <!-- Name Input -->
      <div class="group">
        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <div class="relative">
          <input
            type="text"
            formControlName="name"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition-all"
            [class.border-red-300]="isFieldInvalid('name')"
            placeholder="John Doe"
          >
          <div class="absolute right-3 top-1/2 -translate-y-1/2 text-accent opacity-0 transition-opacity group-focus-within:opacity-100">
            <i class="fas fa-user"></i>
          </div>
        </div>
        @if (isFieldInvalid('name')) {
          <p class="mt-1 text-sm text-red-500">Please enter your name</p>
        }
      </div>

      <!-- Email Input -->
      <div class="group">
        <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <div class="relative">
          <input
            type="email"
            formControlName="email"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition-all"
            [class.border-red-300]="isFieldInvalid('email')"
            placeholder="john@example.com"
          >
          <div class="absolute right-3 top-1/2 -translate-y-1/2 text-accent opacity-0 transition-opacity group-focus-within:opacity-100">
            <i class="fas fa-envelope"></i>
          </div>
        </div>
        @if (isFieldInvalid('email')) {
          <p class="mt-1 text-sm text-red-500">Please enter a valid email address</p>
        }
      </div>

      <!-- Phone Input -->
      <div class="group">
        <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <div class="relative">
          <input
            type="tel"
            formControlName="phone"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition-all"
            [class.border-red-300]="isFieldInvalid('phone')"
            placeholder="+1 234 567 8900"
          >
          <div class="absolute right-3 top-1/2 -translate-y-1/2 text-accent opacity-0 transition-opacity group-focus-within:opacity-100">
            <i class="fas fa-phone"></i>
          </div>
        </div>
        @if (isFieldInvalid('phone')) {
          <p class="mt-1 text-sm text-red-500">Please enter your phone number</p>
        }
      </div>

      <!-- Message Input -->
      <div class="group">
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <div class="relative">
          <textarea
            formControlName="message"
            rows="4"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition-all resize-none"
            [class.border-red-300]="isFieldInvalid('message')"
            placeholder="Tell us about your project..."
          ></textarea>
          <div class="absolute right-3 top-4 text-accent opacity-0 transition-opacity group-focus-within:opacity-100">
            <i class="fas fa-message"></i>
          </div>
        </div>
        @if (isFieldInvalid('message')) {
          <p class="mt-1 text-sm text-red-500">Please enter your message (min. 10 characters)</p>
        }
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-accent hover:bg-accent-dark text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 relative group overflow-hidden"
        [disabled]="!contactForm.valid || submitting"
      >
        <span class="relative z-10 flex items-center justify-center">
          @if (submitting) {
            <i class="fas fa-circle-notch fa-spin mr-2"></i>
            Sending...
          } @else {
            <i class="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform"></i>
            Send Message
          }
        </span>
        <div class="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </form>
  `
})
export class ContactFormComponent {
  protected contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  protected submitting = false;

  protected isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  protected onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitting = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.contactForm.reset();
        this.submitting = false;
      }, 1500);
    }
  }
}