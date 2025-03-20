import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GlobalContainerComponent} from "./features/global-container/global-container.component";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, GlobalContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    { id: 1, name: 'Product A', description: 'Description A', price: 100 },
    { id: 2, name: 'Product B', description: 'Description B', price: 200 },
    { id: 3, name: 'Product C', description: 'Description C', price: 300 }
  ];
}
