import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService], //this creates a seperate instance of room service, if we check the console the constructor of rooms service is called again from this component (we have added a console.log)
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}
}
