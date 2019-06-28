import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenData } from './tokendata';
import { UserData } from './userdata';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(private _http: HttpClient) { }

    private loggedIn = new BehaviorSubject<boolean>(false);

    getToken(userData: UserData) {
        const getTokenURL = "http://localhost:8080/oauth/token";
        const getHttpParams: HttpParams = new HttpParams()
            .append('grant_type', 'password')
            .append('username', userData.username)
            .append('password', userData.password);
        const getHttpHeaders: HttpHeaders = new HttpHeaders()
            .append('Authorization', 'Basic ' + btoa('client:secret'));

        return this._http.post<TokenData>(
            getTokenURL,
            { withCredetials: true },
            {
                headers: getHttpHeaders, params: getHttpParams
            });
    }

    isLoggedIn() {
        const jsessionId = sessionStorage.getItem('jsessionid');
        if ('null' === jsessionId || null === jsessionId) {
            this.loggedIn.next(false);
        } else {
            this.loggedIn.next(true);
        }
        return this.loggedIn.asObservable();
    }
}
