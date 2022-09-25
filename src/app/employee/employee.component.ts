import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService], //we are injecting the service, inside the component. This creates a seperate instance of room service, if we check the console the constructor of rooms service is called again from this component (we have added a console.log)
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';
  //@Self() is used to make sure we inject the service locally within the component so that it has its own instance. If we forget adding the service in providers array, we get nullInjector error. It check if service exists only in this component
  // it doesn't go and search its parent modules etc
  constructor(@Self() private roomsService: RoomsService) {}

  ngOnInit(): void {}
}
