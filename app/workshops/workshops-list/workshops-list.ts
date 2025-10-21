import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { Item } from './item/item';
import { Workshops } from '../workshops';
import IWorkshop from '../models/IWorkshop';
import { Pagination } from '../../common/pagination/pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-workshops-list',
    imports: [CommonModule, LoadingSpinner, ErrorAlert, Item, Pagination, FormsModule],
    templateUrl: './workshops-list.html',
    styleUrl: './workshops-list.scss',
})
export class WorkshopsList implements OnInit {
    workshops!: IWorkshop[];
    error!: Error;
    loading = true;

    page = 1;
    filterKey = '';
    filteredWorkshops: IWorkshop[] | undefined;

    constructor(
        private w: Workshops,
    private activatedRoute: ActivatedRoute,
    private router: Router
) {}

    getWorkshops() {
        this.loading = true;

        this.w.getWorkshops(this.page).subscribe({
            next: (workshops) => {
                this.workshops = workshops;
                this.filteredWorkshops = workshops;
                this.loading = false;
            },
            error: (error) => {
                this.error = error;
                this.loading = false;
            },
        });
    }

ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe({
        next: (queryParams) => {
            const queryStr = queryParams.get('page');

            if (queryStr=== null) {
                 this.page = 1;
                
            } else {
                this.page = +queryStr;
            }
            this.getWorkshops();
        }
    });

}

    changePage(by: number) {
        if (this.page == 1 && by < 0) {
            return;
        }

        this.page += by;

       // this.getWorkshops();
    this.router.navigate(['/workshops'], 
        { 
            queryParams: { page: this.page } 
        });
    
    }
    filterWorkshops() {
    this.filteredWorkshops= this.workshops.filter(
        w => w.name.toUpperCase().includes(this.filterKey.toUpperCase())
    )
    }
}
 