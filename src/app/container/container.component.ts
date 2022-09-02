import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  
  // used to access the content which is in ng-content
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;
  constructor() {}

  ngOnInit(): void {}

  // this lifecycle hook can be used only when view are loading components using ng-component
  // we can access the properties of those components from here

  ngAfterContentInit(): void {
    // we are modifying the properties of employeeComponent
    this.employee.empName = 'Rakshith';
  }
}
