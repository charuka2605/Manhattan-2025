import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IWorkshop from './models/IWorkshop';

@Injectable({
    providedIn: 'root',
})
export class Workshops {
    // private http: HttpClient;

    constructor(private http: HttpClient) {
        // this.http = http;
    }

    getWorkshops(page: number = 1) {
        return this.http.get<IWorkshop[]>(`https://workshops-server.onrender.com/workshops`, {
            params: {
                _page: page,
            },
        });
    }
    getWorkshopById(workshopId: number) {
    return this.http.get<IWorkshop>(
        `https://workshops-server.onrender.com/workshops/${workshopId}`
    );
}
}

 