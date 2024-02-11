import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad6';
  i: number = -1;
  clicked(x: number){
    this.i = x;
  }
}
