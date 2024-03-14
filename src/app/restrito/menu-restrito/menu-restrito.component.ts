import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css'],
})
export class MenuRestritoComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  logout() {
    localStorage.clear();
    this.loginService.setMostraMenu(true);
    this.router.navigate(['/login']);
  }
}
