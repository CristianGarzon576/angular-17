import { Subscription, tap } from 'rxjs';

import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { TeachersListComponent } from '@app/teachers/teachers-list.component';
import { User } from '@interfaces/auth.interfaces';
import { AuthService } from '@services/auth.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TeachersListComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnDestroy {
  user!: User | null;
  subscriptions: Subscription[] = [];
  router: Router = inject(Router)

  constructor(private authService: AuthService) {
    this.subscriptions.push(this.authService.getUser().subscribe(val => this.user = val))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
