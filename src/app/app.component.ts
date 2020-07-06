import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  loadedFeature = 'recipe';


  onNavigate(feature: string){

    console.log('from on navigate'+feature);
    this.loadedFeature = feature;

  }



}
