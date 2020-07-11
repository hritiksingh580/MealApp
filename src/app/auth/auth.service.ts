import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string,
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
    }

    login(email: string, password: string) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCh9DSoi0sq3YbipnB-tnL9fmM-3fMI12c',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
    }
}