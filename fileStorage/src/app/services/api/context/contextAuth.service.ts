import { Observable, lastValueFrom } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from './../../domain/common/userProfile';
import { Injectable } from "@angular/core";
import { Profile } from '../../domain/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ContextAuthService {
  private _user!: Profile;

  public get userProfile(): Profile {
    return this._user;
  }
  public set userProfile(value: Profile) {
    this._user = value;
  }
}
