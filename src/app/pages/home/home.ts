import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERTISE_CARDS } from './home.const';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
expertiseCards: any[] = EXPERTISE_CARDS;

}
