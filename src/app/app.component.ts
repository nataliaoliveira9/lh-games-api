import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LH Games';
  mostrarMenu: boolean = true;
  constructor(private loginService: LoginService) {}
  ngOnInit() {
    this.loginService.getMostraMenu().subscribe((res) => {
      this.mostrarMenu = res;
    });
  }
  ngOnDestroy() {
    localStorage.clear();
  }
}
