import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@interfaces/auth.interfaces';
import { AuthService } from '@services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: []
})
export class LandingComponent implements OnDestroy {

  username: string = '';
  password: string = '';
  user!: User | null;
  subscriptions: Subscription[] = []
  isLoading = signal<boolean>(false);
  private router: Router = inject(Router);

  constructor(private authService: AuthService) {
    this.subscriptions.push(this.authService.getUser().subscribe(val => this.user = val));
    if (this.user != null) {
      this.router.navigate(['teachers'])
    }
  }

  async login(): Promise<void> {
    this.isLoading.update((val) => !val);
    const response = await this.authService.login(this.username, this.password);
    this.isLoading.update((val) => !val);
    if (response != null) {
      this.router.navigate(['/teachers']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
