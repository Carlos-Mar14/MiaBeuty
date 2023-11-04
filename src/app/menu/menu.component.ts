import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateToMakeup(): void {
    this.router.navigate(['/makeup']);
  }

  navigateToClothing(): void {
    this.router.navigate(['/clothing']);
  }

  navigateToFooter(): void {
    this.router.navigate(['/footer']);
  }
}
