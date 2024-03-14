import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  mostraMenu = new Subject<boolean>();
  private isAuthenticated = false;
  private authSecretKey = 'token';

  constructor() {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  login(usuario: string, senha: string): boolean {
    if (usuario === 'aluno' && senha === '1234') {
      const authToken = 'qwer1234';
      localStorage.setItem(this.authSecretKey, authToken);
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
