import { BehaviorSubject } from 'rxjs';
import { UserProfile } from './../../domain/common/userProfile';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContextAuthService {
  private user$ = new BehaviorSubject<any>(null);

  constructor() {
  }

  get userProfile(): any | null {
    return this.user$.asObservable();
  }
  set userProfile(value: any | null) {
    this.user$.next(value);
  }
}
