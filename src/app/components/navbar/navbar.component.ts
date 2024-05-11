import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  toggleMenu() {
    const menu = document.querySelector(".menu-links") as HTMLDivElement;
    const icon = document.querySelector(".hamburger-icon") as HTMLDivElement;
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

}
