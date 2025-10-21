import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sessions } from '../../sessions';
import ISession from '../../models/ISession';
import { ErrorAlert } from '../../../common/error-alert/error-alert';
import { LoadingSpinner } from '../../../common/loading-spinner/loading-spinner';
import { Item } from './item/item';

@Component({
  selector: 'app-sessions-list',
  standalone: true,
  imports: [LoadingSpinner, ErrorAlert, Item],
  templateUrl: './sessions-list.html',
  styleUrl: './sessions-list.scss',
})
export class SessionsList implements OnInit {
  workshopId!: number;
  sessions!: ISession[];
  loading: boolean = false; // ✅ Declare loading
  error: any = null; // ✅ Declare error
  constructor(private sessionsService: Sessions, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const idStr = this.activatedRoute.snapshot.paramMap.get('id');
    this.workshopId = +(idStr as string);

    this.loading = true;
    this.sessionsService.getSessionsForWorkshop(this.workshopId).subscribe({
      next: (sessions) => {
        this.sessions = sessions;
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      },
    });
  }
}
