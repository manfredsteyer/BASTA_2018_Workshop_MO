import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight-booking/flight-search/flight.service';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Guten Tag, Welt!';
  
  constructor(private flightService: FlightService) {
    console.debug('flightService', flightService);
  }
}
