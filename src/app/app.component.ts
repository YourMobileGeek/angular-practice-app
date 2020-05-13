import { Component } from '@angular/core';

@Component({

  // assigns a string a value s
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSecret = false; 
  log = [];

  onToggleDetails() {
      this.showSecret = !this.showSecret; 
      // this.log.push(this.log.length + 1);
      this.log.push(new Date());
  }
}
