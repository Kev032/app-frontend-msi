import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() isLoggedIn = false;

  constructor(private sesionService: SesionService,private router: Router) {
    this.sesionService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

  }
}
