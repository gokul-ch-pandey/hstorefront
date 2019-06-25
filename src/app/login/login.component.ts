import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { UserData } from '../userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    error = false;

    userData: UserData = new UserData();

    login() {
        if (this.userData.username.length > 0 && this.userData.password.length > 0) {
            this.tokenService.getToken(this.userData).subscribe(result => {
                result.expires_in = result.expires_in * 1000 + new Date().getTime();
                sessionStorage.setItem('jsessionid', JSON.stringify(result));
                this.router.navigateByUrl('/home');
            }, error => this.error = true);
        }
    }

    logout() {
        if (null != this.userData) {
            sessionStorage.setItem('jsessionid', null);
            this.router.navigateByUrl('/login');
        }
    }


  constructor(private tokenService: TokenService, private router: Router) {
   }

}
