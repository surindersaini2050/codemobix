import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, HostListener, inject, OnDestroy, OnInit, signal, TemplateRef, WritableSignal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  private offcanvasService = inject(NgbOffcanvas);
  isScrolled = false;
  isMobileMenuOpen = false;
  isMobileView = false;
  activeRoute = 'home';
  closeResult: WritableSignal<string> = signal('');

  navItems = [
    { id: 'home', label: 'Home', route: '/' },
    { id: 'services', label: 'Services', route: '/services' },
    // { id: 'portfolio', label: 'Portfolio', route: '/portfolio' },
    { id: 'contact', label: 'Contact', route: '/contact-us' },
    { id: 'about', label: 'About', route: '/about-us' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkIsMobile();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkIsMobile();
  }

  private checkIsMobile(): void {
    if (window.innerWidth > 768) {
      this.isMobileView = false;
    } else {
      this.isMobileView = true;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50;
  }


  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { panelClass: 'taskbar-mobile-menu' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  onGetStartedClick() {
    this.router.navigate(['/contact-us']);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
