import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
    ],
    declarations: [
        FlightSearchComponent, 
        FlightCardComponent, 
        PassengerSearchComponent,
        FlightEditComponent
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {
}