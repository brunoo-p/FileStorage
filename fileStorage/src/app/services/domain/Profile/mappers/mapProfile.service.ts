import { Profile } from '../profile';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MapProfile {
  fromObject(data: any): Profile {
    return new Profile(
      data.id,
      data.firstName,
      data.lastName,
      data.email,
      data.cpf,
      data.isActive
    )
  }

}
