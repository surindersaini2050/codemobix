import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected title = 'codemobix';

  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const el = document.querySelector(".body-container");
       if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback to window
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    });
  }

}
