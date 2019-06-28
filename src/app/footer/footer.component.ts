import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;

    constructor(private tokenService: TokenService) { }

    ngOnInit() {
        this.isLoggedIn$ = this.tokenService.isLoggedIn();
    }

}