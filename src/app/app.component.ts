import { Component } from '@angular/core';
import { TokenService } from './token.service';
import { UserData } from './userdata';

@Component({
    selector: 'app-root',
    providers: [TokenService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userData: UserData = new UserData();
    token = '';
    error = '';
    constructor(private _tokenService: TokenService) {

    }

    getToken() {
        this._tokenService.getToken(this.userData).subscribe(res => {
            this.token = res.access_token;
            this.error = ''
        },
        err => {
            this.error = 'ERROR';
        });
    }
}
