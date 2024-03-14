import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  private isAuthenticated = false;
  private authSecretKey = 'token';

  constructor() {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  login(username: string, password: string): boolean {
    if (username === 'aluno' && password === '1234') {
      const authToken = 'qwer1234'; // Generate or receive the token from your server
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
}
