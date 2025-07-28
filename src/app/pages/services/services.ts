import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SERVICES_CARDS } from './services.const';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['../about-us/about-us.scss', './services.scss']
})
export class Services {
  serviceCards: any[] = SERVICES_CARDS;

}
