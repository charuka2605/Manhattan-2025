import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/location-pipe';
import IWorkshop from '../../models/IWorkshop';

@Component({
    selector: 'app-item',
    // components, directives, modules, pipes
    imports: [RouterLink, DatePipe, LocationPipe],
    templateUrl: './item.html',
    styleUrl: './item.scss',
})
export class Item {
    @Input()
    workshop!: IWorkshop;
}
