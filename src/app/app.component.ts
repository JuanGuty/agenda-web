import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'La Agenda';
  owner = 'Juan';

  gretter(name) {
    this.owner = name;
    console.log(this.owner);
  }
}
