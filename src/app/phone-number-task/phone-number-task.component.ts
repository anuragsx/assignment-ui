import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { CheckoutServiceService } from '../checkout-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-phone-number-task',
  templateUrl: './phone-number-task.component.html',
  styleUrls: ['./phone-number-task.component.css']
})
export class PhoneNumberTaskComponent implements OnInit  {

  constructor(private formBuilder: FormBuilder, private checkoutService: CheckoutServiceService) { }

  userAddressValidations: FormGroup;
  mobileNumber = new FormControl(); 

  checkoutForm = new FormGroup({
    mobileNumber: new FormControl('')
  });

  ngOnInit() {
  }

  // function to format mobile numbers
  somethingChanged(event) {
    if (event.startsWith("07") && new String(event).length == 10) {
      this.mobileNumber.setValue(new String(event).replace(/.{5}$/,' $&'));
    } else if (event.startsWith("+447") && new String(event).length == 12) {
      this.mobileNumber.setValue(new String(event).replace(/.{9}$/,' $&').replace(/.{5}$/,' $&'));
    } else if (event.startsWith("447") && new String(event).length == 10) {
      this.mobileNumber.setValue(new String(event).replace(/.{6}$/,' $&'));
    }
    else {
      
    }
  }

  // submitting the value of form, making API call for a valid phone number
  onSubmit() {
    if (this.mobileNumber.value != null && this.mobileNumber.valid) {
      console.log('correct')
      let jsonObj = {
        "data": {
          "type": "notifications",
          "attributes": {
            "mobile-number": this.mobileNumber.value
          }
        }
      }
      // handeling few error codes but could be more. Not displaying in UI as it was not mentioned in the.. 
      //..assingment but could be done.
      this.checkoutService.postPhoneNumber(jsonObj).subscribe((data: any) => {
      }, (err) => {
        if (err) {
          switch(err.status) { 
            case 422: { 
               err.error.errors.forEach(element => {
                console.log('Error - ', element.title)
              });
               break; 
            } 
            case 500: { 
              err.error.errors.forEach(element => {
                console.log('Error - ', element.title)
              }); 
               break; 
            } 
            case 404: { 
              err.error.errors.forEach(element => {
                console.log('Error - ', element.title)
              }); 
               break; 
            } 
            default: { 
               break; 
            } 
         } 
        }
      });
    } else {
      console.log('invalid format!')
      return false;
    }

  }


}
