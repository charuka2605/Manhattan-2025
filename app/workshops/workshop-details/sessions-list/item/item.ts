import { Component, Input, Output, EventEmitter } from '@angular/core';
import ISession from '../../../models/ISession';
import { VotingWidgetC } from '../../../../common/voting-widget/voting-widget';
@Component({
  selector: 'app-item',
  imports: [VotingWidgetC],
  templateUrl: './item.html',
  styleUrls: ['./item.scss'],
})
export class Item {
  @Input() session!: ISession;
  @Output()
  vote = new EventEmitter<number>();

  emitVote(by: number) {
    this.vote.emit(by);
  }
}
