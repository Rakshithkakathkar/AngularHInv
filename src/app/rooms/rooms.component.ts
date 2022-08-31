import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton';
  title: string = 'Room List';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;

  // using this we can access any property of headerComponent
  // the component is accessible only after viewInit
  // by default static is false and we don't have to explicitly mention it in the code
  // if we make static as true
  // this behavior is due to the lifecycle hooks, each hook is called in order
  // ngOnChanges -> ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked -> ngAfterViewInit -> ngAfterViewInitChecked -> ngOnDestroy
  // this lifecycle is executed for each component
  // when static is set to true it means it(headerComponent) is safe to use in onInit of the parent (roomsComponent)
  // and it is safe only when it has no asynchronous functions within the ngOnit of headerComponent, if it has asynchronous option then the code execution gets blocked and it will be a mess
  // at afterViewInit we are 100% sure that all the child components that are called here are ready and the properties are ready to be accessed from parent, that is why in ngAfterViewInit we have access to the child components metadata (headerComponent)
  @ViewChild(HeaderComponent, { static: false })
  headerComponent!: HeaderComponent;

  constructor() {}

  // this is a lifecycle hook that is rarely used
  // if we check the console, whenever any event happens on the app this function is trigerred
  // this is a very costly operation and must be prevented
  // do not use ngOnChanges and ngDoCheck on the same component because they both have the same functionality
  // ngDoCheck(): void {
  //   console.log('doCheck is called');
  // }

  ngOnInit(): void {
    // here it is still undefined because headerComponent is not yet ready here
    // if static is true, then we can see the metadata of headerComponent here also
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('10-Aug-2022'),
        checkoutTime: new Date('12-Aug-2022'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private suite',
        amenities: 'Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('10-Aug-2022'),
        checkoutTime: new Date('12-Aug-2022'),
        rating: 2.6,
      },
    ];
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
  }

  // this lifecycle hook is very rarely used
  // at this point angular has completed one life cycle check and it doing the second lifecycle check
  // any property changes can be done here as well on the child component
  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Rooms View';
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Private suite',
      amenities: 'Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      checkinTime: new Date('10-Aug-2022'),
      checkoutTime: new Date('12-Aug-2022'),
      rating: 2.6,
    };

    // when using onPush strategy data the input shouldn't be modified
    // .push changes the roomList property which is the input to the child component
    // we should always return a new instance to child
    // this.roomList.push(room); (this won't work with onPush strategy)
    // this.roomList should be immutable
    this.roomList = [...this.roomList, room]; // here we are returning a new instance of roomList array
  }
}
