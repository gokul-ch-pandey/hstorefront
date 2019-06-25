import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
    contactUsForm = this._fb.group({
        firstName : [null, Validators.required],
        lastName : [null, Validators.required],
        email: [null, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],
        phone: [null],
        message: [null, Validators.required]
    });

  constructor(private _fb: FormBuilder) { }
}
