import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, HostBinding} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl, Validators, FormGroup, ValidationErrors} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: Object;

  constructor( private http:HttpClient,private _router: Router, private route:ActivatedRoute, ) { }

  ngOnInit() {

    this.http.get('http://localhost:4200/api/v1/users/userlist',this.users).subscribe(data=>{
       console.log(data);
       this.users=data;
     })

  }
}
