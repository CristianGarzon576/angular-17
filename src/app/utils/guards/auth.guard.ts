import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const authGuard: CanActivateFn = (_, __) => {
    const isLoggedUser = inject(AuthService).isLoggedUser;
    const router = inject(Router);
    console.log(isLoggedUser)
    if (isLoggedUser) {
        return true;
    } else {
        router.navigate(['']);
        return false;
    }
};