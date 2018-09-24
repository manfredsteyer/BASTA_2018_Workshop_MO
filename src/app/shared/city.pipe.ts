import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): any {
    
    let short, long;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz-Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Helmut Schmidt';
        break;
      case 'Frankfurt':
        short = 'FRA';
        long = 'Airport Frankfurt'
        break;
      default:
        short = long = value;
    }

    if (fmt === 'long') return long;
    return short;


  }

}
