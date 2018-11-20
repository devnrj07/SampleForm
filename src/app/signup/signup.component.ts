import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UsernameValidator } from '../Validations/Username.Validator';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  countries = [
     'Uruguay',
     'United States',
     'Argentina',
     'India'
  ];

  states = [
    'Maharashtra',
    'AP', 'MP', 'UP', 'RJ'

  ];

  genders = [
    'Male',
    'Female',
    'Other'
  ];


  validation_messages = {
    'fullname': [
      { type : 'pattern', message : 'No special characters are allowed'},
      { type: 'required', message: 'Full name is required' }
    ],
    'bio': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'gender': [
      { type: 'required', message: 'Please select your gender' },
    ],
    'birthday': [
      { type: 'required', message: 'Please insert your birthday' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
     'city': [
      { type: 'required', message: 'City is required' },
      { type: 'pattern', message: 'Only Alphabets allowed' }
    ],

    'zipcode': [
      { type: 'required', message: 'Zipcode is required' },
      { type: 'pattern', message: 'Zipcode is incorrect' }
    ]

  };

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'This username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'invalid', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };



  constructor(private FB: FormBuilder) { }



  userDetailsForm = this.FB.group({
    fullname: ['', [Validators.required, Validators.pattern('^([a-z]|[A-Z]){4,8}$')]],
    bio: ['dummy text of the printing and typesetting industry.', Validators.maxLength(256)],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    address: this.FB.group({
      state: ['',  Validators.required],
      city: [ '', [Validators.required, Validators.pattern('^([a-z]|[A-Z]){4,30}$')]],
      zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      country: ['', Validators.required],
   }), username: ['', [
      UsernameValidator.validUsername,
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.required
     ]],
     email: ['', [  Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
     password: ['', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
     confirm_password: ['', this.Validpass],
     terms: new FormControl(false, Validators.pattern('true'))
   });


   ngOnInit() {
  }


   Validpass(abstract: AbstractControl) {
    if (abstract && (abstract.value !== null || abstract.value !== undefined)) {
    const cnfpass = abstract.value;

    const pass = abstract.root.get('password'); // -> root->value
    if (pass) {
        const passValue = pass.value;
        if (passValue !== cnfpass || passValue === '') {
            return {
                isError: true
            };
        }
    }
}

return null;
}


}
