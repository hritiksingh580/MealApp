import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string,
    'registered'?: boolean
}

@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private http: HttpClient) { }

    SingUp(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCh9DSoi0sq3YbipnB-tnL9fmM-3fMI12c',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                })
            .pipe(catchError(this.handleError))
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCh9DSoi0sq3YbipnB-tnL9fmM-3fMI12c',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMsg = 'Network or Unkonwn error occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMsg);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMsg = 'This email exists already';
                break
            case 'EMAIL_NOT_FOUND':
                errorMsg = 'There is no user record corresponding to this identifier';
                break
            case 'INVALID_PASSWORD':
                errorMsg = 'The password is invalid or the user does not have a password.';
                break
        }
        return throwError(errorMsg);
    }
}