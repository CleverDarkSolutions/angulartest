import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GlobalHeaderComponent} from '../global-header/global-header.component';
import {GlobalFooterComponent} from '../global-footer/global-footer.component';

@Component({
  selector: 'app-global-container',
  imports: [
    RouterOutlet,
    GlobalHeaderComponent,
    GlobalFooterComponent
  ],
  templateUrl: './global-container.component.html',
  styleUrl: './global-container.component.css'
})
export class GlobalContainerComponent {

}
