import { Component, Input } from '@angular/core';
import Data from '../../assets/data.json'; 

interface Element{
  title: String;
  desc: String;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item: number = -1;
  data: Element[] = Data;
}
