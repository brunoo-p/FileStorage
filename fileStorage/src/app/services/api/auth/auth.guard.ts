import { StorageManagerService } from './../../domain/utils/storage/storageManager.service';
import { ContextAuthService } from './../context/contextAuth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private user: any;
  constructor(
    private router: Router,
    private contextAuthService: ContextAuthService,
    private storageManager: StorageManagerService
  ) {
  }

  canActivate(): boolean {

    const token = this.storageManager.getItem('@Fs:user');
    this.user = this.contextAuthService.userProfile;

    if (this.user || token) {
      return true;
    }

    this.router.navigate(['login']);
    return false;

  }

}
