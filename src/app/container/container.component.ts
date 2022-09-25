import { AfterContentInit, Component, ContentChild, OnInit, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {
  
  // used to access the content which is in ng-content
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;


  // since this is a container component and in this container component we have employee and room component, it will use the instance of the service that is created here
  // we do not have to inject it individually
  // it should either be found in the provider array of this component or in the parent module
  constructor(@Host() private roomService: RoomsService) {}

  ngOnInit(): void {}

  // this lifecycle hook can be used only when view are loading components using ng-component
  // we can access the properties of those components from here

  ngAfterContentInit(): void {
    // we are modifying the properties of employeeComponent
    this.employee.empName = 'Rakshith';
  }
}
