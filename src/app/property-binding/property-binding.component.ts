import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit 
{

  exibeMsg:boolean = true;

  exibir() 
  {
    this.exibeMsg = !this.exibeMsg;
  }

  constructor() { }

  ngOnInit() {
  }

}
