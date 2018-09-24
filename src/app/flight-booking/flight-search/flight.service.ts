import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { DefaultFlightService, DummyFlightService } from './default-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService,
  // useFactory: (http: HttpClient) => {
  //   if (1===1) {
  //     return new DefaultFlightService(http);
  //   }
  //   else {
  //     return new DummyFlightService(http);
  //   }
  // },
  deps: [HttpClient]  // <-- Hoffe, dass das bald verschwindet
})
export abstract class FlightService {

  flights: Flight[] = [];
  
  abstract load(from: string, to: string): void;

  abstract find(from: string, to: string): Observable<Flight[]>;
}
