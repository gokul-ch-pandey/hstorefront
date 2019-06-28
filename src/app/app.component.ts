import { Component } from '@angular/core';
import { TokenService } from './token.service';
import { UserData } from './userdata';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    providers: [TokenService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn: boolean;
    userData: UserData = new UserData();
    token = '';
    error = '';
    constructor(private tokenService: TokenService, private router: Router) {
        this.tokenService.isLoggedIn().subscribe(value => this.isLoggedIn = value);
        console.log(this.isLoggedIn);
        if (!this.isLoggedIn) {
            router.navigateByUrl('/login');
        }
    }

    getToken() {
        this.tokenService.getToken(this.userData).subscribe(res => {
            this.token = res.access_token;
            this.error = ''
        },
            err => {
                this.error = 'ERROR';
            });
    }
}
