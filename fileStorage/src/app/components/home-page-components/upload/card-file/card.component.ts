import { Component, EventEmitter, Input, Output } from "@angular/core";
import { __values } from "tslib";

@Component({
  selector: 'app-card-container',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardContainerComponent {
  @Input() file: any;
  @Output() setEditFile = new EventEmitter();


  trackByKeywordList(index: number){
    return index;
  }
  editFile(file: any) {
    this.setEditFile.emit(file);
  }
}
