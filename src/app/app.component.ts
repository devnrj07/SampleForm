import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleForm';

  navLinks = [
    { path: '/login', label: 'Sign In' },
    { path: '/sign', label: 'Sign Up' },
     ];
}
