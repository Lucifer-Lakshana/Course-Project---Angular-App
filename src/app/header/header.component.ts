import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();


  constructor() { }

  collapsed = true;

  onSelect(feature: string){

    console.log('from onSelect'+feature);
    this.featureSelected.emit(feature);

  }

  ngOnInit() {
  }

}
