import { Component } from '@angular/core';
import carsData from '../assets/cars.json'; 

interface Car{
  brand: String;
  model: String[];
  color: String[][];
  equipment: String[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  cars: Car[] = carsData;
  selectedBrand : number = 0;
  selectedModel : number = 0;
  selectedColor : string = "";
  show : boolean = false;
  selectedButton: any = null;


  clicked(event : any){
    this.selectedColor = event.target.style.backgroundColor;
    this.show = true;
    this.selectedButton = event.target;
  }

  changedBrand(){
    this.show = false;
    this.selectedModel = 0;
    this.selectedButton.parentNode.querySelector('input').checked = false;
  }

  changedModel(){
    this.show = false;
    this.selectedButton.parentNode.querySelector('input').checked = false;
  }


}

