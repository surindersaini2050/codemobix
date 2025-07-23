import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-homepage',
  imports: [CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
}
