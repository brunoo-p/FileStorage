import { ErrorService } from './../../services/domain/error/error.service';
import { Component } from "@angular/core";

@Component({
  selector: 'app-message-badge',
  templateUrl: './message-badge.component.html',
  styleUrls: ['./message-badge.component.css']
})
export class MessageBadgeComponent {

  err: any;
  constructor(
    private errorService: ErrorService
  ) {
    this.errorService.get().subscribe((err) => this.err = err);
  }

}
