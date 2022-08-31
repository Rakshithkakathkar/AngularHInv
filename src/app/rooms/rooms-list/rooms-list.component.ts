import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';


@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  // ngOnChanges is used only on components which has @Input property
  // this shows changes on the input property and when it gets new values
  // usecase - this is used to modify the input property based on conditions if necessary
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // here we are changing the title property which is an input to this component as and when it comes inside
    if (changes['title'])
      this.title = changes['title'].currentValue.toUpperCase();
  }

  ngOnInit(): void {}

  // whenever a component is removed from DOM, the ngOnDestroy method is called
  // clean up can be done in this method
  // subscriptions can be removed here
  ngOnDestroy(): void {
    console.log('On destroy is called');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
