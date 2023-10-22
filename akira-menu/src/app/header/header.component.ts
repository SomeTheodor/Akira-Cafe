import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'header', // Asegúrate de que el selector sea 'app-header'
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // Obtén la referencia a navLinks
    const navLinks = this.el.nativeElement.querySelector('#navLinks');

    // Define las funciones showMenu y hideMenu
    const showMenu = () => {
      if (navLinks) {
        navLinks.style.right = "0";
      }
    }

    const hideMenu = () => {
      if (navLinks) {
        navLinks.style.right = "-200px";
      }
    }

    // Escucha el evento scroll y aplica la clase "sticky" cuando sea necesario
    window.addEventListener("scroll", () => {
      const navbar = this.el.nativeElement.querySelector('nav');
      if (navbar) {
        this.renderer.addClass(navbar, 'sticky');
        if (window.scrollY === 0) {
          this.renderer.removeClass(navbar, 'sticky');
        }
      }
    });
  }
}
