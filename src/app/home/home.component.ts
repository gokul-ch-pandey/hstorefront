import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    isLoggedIn: boolean;

    constructor(private tokenService: TokenService, private router: Router) {
        this.tokenService.isLoggedIn().subscribe(value => this.isLoggedIn = value);
        console.log(this.isLoggedIn);
        // if (!this.isLoggedIn) {
        //     router.navigateByUrl('/login');
        // }
    }



}
