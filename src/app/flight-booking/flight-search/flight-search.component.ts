import { DefaultFlightService } from './default-flight.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  selectedFlight: Flight;

  // flights: Array<Flight> = [];

  get flights() { // *ngFor="let f of flights"
    return this.flightService.flights;
  }

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  }

  // private http: HttpClient;

  constructor(private flightService: FlightService) { 
    // this.http = http;
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search(): void {
    this.flightService.load(this.from, this.to);
    
  }

  ngOnInit() {
  }

}
