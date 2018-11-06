import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss'],
})
export class NewFormComponent {
  personForm = this.fb.group({
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    phone: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private personService: PersonService) {}

  onSubmit() {
    console.log(this.personForm.value);
    this.personService.addPerson(this.personForm.value).subscribe(response => {
      console.log('OK: ', response);
    }, error => {
      console.log('ERROR: ', error);
    }
    );
  }
}