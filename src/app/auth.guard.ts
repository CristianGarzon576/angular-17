import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const authGuard: CanActivateFn = (_, __) => {
    const isLoggedUser = inject(AuthService).isLoggedUser();
    const router = inject(Router);
    if (isLoggedUser) {
        return true;
    } else {
        router.navigate(['']);
        return false;
    }
};