import { Injectable } from "@angular/core";
import { User } from "@interfaces/auth.interfaces";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { usersData } from "src/mocks/auth.mock";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user$: BehaviorSubject<User | null>;
    private id = Math.random();
    isLoggedUser: boolean = false;

    constructor() {
        this.user$ = new BehaviorSubject<User | null>(null);
        const localUser = localStorage.getItem('token');
        if (!!localUser) {
            const tokenUser = JSON.parse(localUser);
            const findUser = usersData.find(user => user.id == tokenUser.id && user.username == tokenUser.username && JSON.stringify(user) == localUser);
            if (findUser) {
                this.isLoggedUser = true;
                this.user$.next(tokenUser);
            }
        }
    }

    login(username: string, passowrd: string): Promise<User | null> {
        console.log(this.id);
        return new Promise((resolve) => {
            const users = usersData;
            const user = users.find((userEntry) =>
                userEntry.username.trim().toLocaleLowerCase() == username.trim().toLocaleLowerCase() && userEntry.password.trim().toLocaleLowerCase() == passowrd.trim().toLocaleLowerCase()
            )
            setTimeout(() => {
                if (user != undefined) {
                    this.user$.next(user);
                    this.isLoggedUser = true;
                    localStorage.setItem('token', JSON.stringify(user))
                    resolve(user)
                } else {
                    resolve(null)
                }
            }, 1000)
        })
    }

    logout(): Promise<Subject<User | null>> {
        return new Promise(resolve => {
            this.user$.next(null);
            resolve(this.user$)
        })
    }

    getUser(): Observable<User | null> {
        console.log(this.id)
        return this.user$.asObservable();
    }
}


