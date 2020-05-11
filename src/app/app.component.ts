import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Use it dont abuse it";
  title = 'Neils first app';

  loadedFeature = 'recipe';

  onNavigate (feature: string) {
    this.loadedFeature = feature;
  }

}
