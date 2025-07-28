import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERTISE_CARDS } from './home.const';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  expertiseCards: any[] = EXPERTISE_CARDS;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .slide-down, .zoom-in'
    );

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // COUNTER logic
    const counters = document.querySelectorAll('.counter');
    const runCounter = (el: Element) => {
      const target = +el.getAttribute('data-value')!;
      let current = 0;
      const increment = Math.ceil(target / 100);

      const update = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;
          el.textContent = current.toString();
          requestAnimationFrame(update);
        }
      };
      update();
    };

    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  onGetStartedClick() {
    this.router.navigate(['/contact-us']);
  }

}