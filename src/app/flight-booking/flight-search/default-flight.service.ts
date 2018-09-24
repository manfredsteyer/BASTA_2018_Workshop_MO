import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import {  HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../../entities/flight';
import { Observable, of } from 'rxjs';

@Injectable()
export class DefaultFlightService implements FlightService {
  
  

  constructor(private http: HttpClient) { }

  flights: Flight[] = [];

  load(from: string, to: string): void {
    this.find(from, to).subscribe(
      flights => { this.flights = flights; },
      err => {console.error('error loading flights', err); }
    )
  }

  find(from: string, to: string): Observable<Flight[]> {
    
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }


}




@Injectable()
export class DummyFlightService implements FlightService {
  
  constructor(private http: HttpClient) { }

  flights: Flight[] = [];
  
  load(from: string, to: string): void {
    this.find(from, to).subscribe(
      flights => { this.flights = flights; },
      err => {console.error('error loading flights', err); }
    )
  }


  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 4711, from:'Graz', to: 'Köln', date: '2018-09-24T17:00'},
      { id: 4712, from:'Graz', to: 'Köln', date: '2018-09-24T17:30'},
      { id: 4713, from:'Graz', to: 'Köln', date: '2018-09-24T17:45'}
    ])
  }
}