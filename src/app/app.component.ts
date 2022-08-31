import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';
  role = 'Admin';

  // dynamic rendering of rooms component.
  // ViewContainerRef is used to dynamically load a component
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // since we are using viewChild by default static is false
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);

    // using componentRef we can now access properties of RoomsComponent
    componentRef.instance.numberOfRooms = 50;
  }
}
