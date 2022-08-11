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
    this.contextAuthService.userProfile
      .subscribe((content: any) => this.user = content);
  }

  canActivate(): boolean {

    this.contextAuthService.userProfile;
    const token = this.storageManager.getItem('@Fs:user');

    if (this.user !== null || token) {
      return true;
    }

    this.router.navigate(['login']);
    return false;

  }

}
