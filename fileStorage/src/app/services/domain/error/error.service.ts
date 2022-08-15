import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error = new BehaviorSubject<{ class: string, message: string }>({ class: 'error', message: ''});

  add(err: any) {
    this.error.next(err);
  }
  get() {
    return this.error.asObservable();
  }
}
