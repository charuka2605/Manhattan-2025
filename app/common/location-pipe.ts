import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '../workshops/models/IWorkshop';

@Pipe({
    name: 'location',
})
export class LocationPipe implements PipeTransform {
    transform(location: ILocation, limit: number = 1000): unknown {
        const str = `${location.address}, ${location.city}, ${location.state}`;

        if (str.length > limit) {
            return str.substring(0, limit) + '...';
        } else {
            return str;
        }
    }
}
