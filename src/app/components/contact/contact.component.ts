import { ConnectionService } from '../../services/connection/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare const alert: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }
  
  errorMsg = '';

  constructor(
    private fb: FormBuilder, private connectionService: ConnectionService, private router: Router
    ) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['1', Validators.required],
    'contactFormMessage': ['', Validators.required]
    });
  }

  closeError(){
    this.errorMsg = '';
  }

  onSubmit() {
    this.connectionService.submitForm(this.contactForm.value).subscribe(
       () => {
        this.contactForm.reset();
        // alert('Thank you for your message','info');
        this.router.navigateByUrl('/success');
       },
       err => {
         this.errorMsg = err;
       }
     );
  }

  ngOnInit(): void {
  }

}