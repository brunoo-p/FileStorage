import { UserProfile } from './../../domain/common/userProfile';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContextAuthService {
  private user!: any | null;

  constructor() {
    this.user = null;
  }

  get userProfile(): any | null {
    return this.user;
  }
  set userProfile(value: any | null) {
    this.user = value;
    localStorage.setItem('@Token', JSON.stringify(this.user));
  }
}
