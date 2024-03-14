import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario!: string;
  senha!: string;
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {}
  fazerLogin() {
    this.loginService.login(this.usuario, this.senha);
    this.router.navigate(['/restrito/lista']);
    this.loginService.setMostraMenu(false);
  }
}
