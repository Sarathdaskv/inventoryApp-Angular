import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { roomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent  implements OnChanges {
 

  @Input() rooms: roomList[] | null = []; 

  @Input() roomTitle:string=''

  @Output() selectedRoom = new EventEmitter<roomList>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  selectedRooms(room: roomList) {
    this.selectedRoom.emit(room);
  }
}
