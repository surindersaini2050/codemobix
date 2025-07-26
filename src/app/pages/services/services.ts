import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls:['../about-us/about-us.scss', './services.scss']
})
export class Services {

}
