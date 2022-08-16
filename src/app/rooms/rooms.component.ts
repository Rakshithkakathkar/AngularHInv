import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 4.5
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
      rating: 3.4
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
      rating: 2.6
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
