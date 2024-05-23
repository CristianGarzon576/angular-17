import { Subscription, tap } from 'rxjs';

import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { TeachersComponent } from '@app/teachers/teachers.component';
import { User } from '@interfaces/auth.interfaces';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TeachersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnDestroy {
  user!: User | null;
  subscriptions: Subscription[] = [];

  private authService: AuthService = inject(AuthService);

  constructor() {
    this.subscriptions.push(this.authService.getUser().pipe(tap(console.log)).subscribe(val => this.user = val))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  logout(): void {
    this.authService.logout();
  }
}
