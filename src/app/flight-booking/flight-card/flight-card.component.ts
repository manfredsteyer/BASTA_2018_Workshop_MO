import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.item, this.selected);

    this.selectedChange.next(true);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.item, this.selected);
    if (changes['item']) {
      console.debug('\titem changed');
    }
    if (changes['selected']) {
      console.debug('\tselected changed');
    }

  }

  select(): void {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
