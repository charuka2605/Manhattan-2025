import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule,} from '@angular/router';
import { Workshops } from '../workshops';
import IWorkshop from '../models/IWorkshop';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../common/location-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-workshop-details',
  imports: [LoadingSpinner, ErrorAlert, DatePipe, LocationPipe, FontAwesomeModule, CommonModule, RouterModule,],
  templateUrl: './workshop-details.html',
  styleUrl: './workshop-details.scss'
})
export class WorkshopDetails implements OnInit {
 loading = true;
    error : Error | null = null;
    workshop!: IWorkshop;
    workshopId!: number;
icons ={
    faCheckCircle,
    faTimesCircle,
} 

  constructor
    ( 
      private activatedRoute: ActivatedRoute,
      private workshopsService: Workshops,
    ){}
ngOnInit() {
  this.activatedRoute.paramMap.subscribe({
     next: (params) => {
                const idStr = params.get('id');
                this.workshopId = +(idStr as string);

                this.workshopsService
                    .getWorkshopById(this.workshopId)
                    .subscribe({
                        next: (workshop) => {
                            this.workshop = workshop;
                            this.loading = false;
                        },
                        error: (error) => {
                            this.error = error;
                            this.loading = false;
                        },
                    });
            },
        });
    }
}