import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@interfaces/auth.interfaces';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: []
})
export class LandingComponent {

  username: string = '';
  password: string = '';

  user!: User;
  isLoading = signal<boolean>(false);
  private router: Router = inject(Router);

  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(val => console.log('user -> ', val));
  }

  async login(): Promise<void> {
    this.isLoading.update((val) => !val);
    const response = await this.authService.login(this.username, this.password);
    this.isLoading.update((val) => !val);
    if (response != null) {
      this.router.navigate(['/teachers']);
    }
  }

}
