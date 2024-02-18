import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openMenu() {
    const container = document.querySelector('.container') as HTMLElement;
    const menu = document.querySelector('#menu') as HTMLInputElement;
    const navBar = document.querySelector('.navBar') as HTMLElement;
    if (menu.checked) {
      navBar.classList.remove("nav");
      navBar.classList.add("activeNavBar");
      document.body.style.overflow = "hidden";
      container.style.width = "100%";
    } else {
      navBar.classList.remove("activeNavBar");
      navBar.classList.add("nav");
      document.body.style.overflow = 'auto';
      container.style.width = "85%";
    }
  }


  closeMenu() {
    const container = document.querySelector('.container') as HTMLElement;
    const menu = document.querySelector('#menu') as HTMLInputElement
    const navBar = document.querySelector('.navBar') as HTMLElement;
    navBar.classList.remove("activeNavBar");
    navBar.classList.add("nav");
    document.body.style.overflow = 'auto';
    menu.checked = false;
    container.style.width = "85%";
  }

}
