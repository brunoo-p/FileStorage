import { ContextAuthService } from './../context/contextAuth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private contextAuthService: ContextAuthService) { }

  canActivate(): boolean {

    const user = this.contextAuthService.userProfile;
    const token = localStorage.getItem('@Token');
    if (user !== null) {
      console.log(true);
      return true;
    }

    this.router.navigate(['login']);
    return false;

  }

}
