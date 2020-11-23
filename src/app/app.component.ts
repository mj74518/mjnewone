import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>  
`,
  styles: []
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mjnewone';
}
