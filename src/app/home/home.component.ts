 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private router: Router) { 
      let token = sessionStorage.getItem('jsessionid');

      if(null == token || JSON.parse(token).expires_in < new Date().getTime){
          router.navigateByUrl('/login');
      }

  }

 

}
