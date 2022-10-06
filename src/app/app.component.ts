import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef, Optional, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import {localStorageToken} from '../app/localstorage.token'

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
// export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';
  role = 'Admin';

  // dynamic rendering of rooms component.
  // ViewContainerRef is used to dynamically load a component
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // since we are using viewChild by default static is false
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);

    // using componentRef we can now access properties of RoomsComponent
  //   componentRef.instance.numberOfRooms = 50;
  // }

  // suppose we want a service to be injected only in dev environment we can use @Optional() decorator
  // now even if this is not injected, we do not get any errors
  constructor(@Optional() private loggerService: LoggerService, 
  @Inject(localStorageToken) private localStorage: any){

  }

  ngOnInit(): void {
    //since loggerService is optional, we call the Log() only if it exists
    this.loggerService?.Log('AppComponent.ngOnInit()')

    this.localStorage.setItem('name', 'Hilton Hotel'); // adding an item to local storage, here local storage in injected as a value provider
  }
}
