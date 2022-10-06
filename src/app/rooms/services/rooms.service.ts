import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

// providedIn : 'root this means angular adds it automatically in the provider array in the app.module.ts by default
// whatever is there in that providers array can be used across different components in the app
// also this means a SINGLE INSTANCE of the service is available throughout the app

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
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


  // this is a type of DI where we are injecting an object (value providers)
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    // if this is injected in root, this is a single instance and then this line is printed only once in the console
    // if it is injected into each component individually, multiple instances of this services are created and this line is printed multiple times. (check employee.component)
    console.log('room service is initialized');

    //console.log(environment.apiEndPoint); // this is one way of accessing apiEndPoint from environmant file

    console.log(this.config.apiEndPoint)
  }

  getRooms() {
    return this.roomList;
  }
}
