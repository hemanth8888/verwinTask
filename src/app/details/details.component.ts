import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, HostBinding} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl, Validators, FormGroup, ValidationErrors} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

const NUM_REGEX=/[0-9]/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX=/^[91]{2}-\d{10}$/;
const PIN_REGEX=/^\d{6}$/;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent  {
taskForm: FormGroup;
data = new taskData();

 
statusdata= ["Add","Update","delete"];

  constructor( private http:HttpClient,private _router: Router, private route:ActivatedRoute, ) { }
 	
     ngOnInit() {
		
		this.taskForm = new FormGroup({	
			'name' : new FormControl('',[ Validators.required] ),
			'Bdate' : new FormControl('',[ Validators.required]), 
			'email' : new FormControl(''), 
			'phnum' : new FormControl(''), 
			'gender' : new FormControl('',[Validators.required]),
			'address' : new FormControl('',[ Validators.required] ), 
			'statuss' : new FormControl('',[ Validators.required]),
		});
		 
	}
	  
	
	  get name(){ return this.taskForm.get('name')};
	  get Bdate(){ return this.taskForm.get('Bdate')};
	  get email(){ return this.taskForm.get('email')};
	  get phnum(){ return this.taskForm.get('phnum')};
	  get gender(){ return this.taskForm.get('gender')};
	  get address(){ return this.taskForm.get('address')}; 
 	  get statuss(){ return this.taskForm.get('statuss')};

     onSubmit(){
     const  detailsUser=
  {
    name :    this.data.name,
    Bdate :   this.data.Bdate.toString(),
    email :   this.data.email,
    phnum :   this.data.phnum,
    gender :  this.data.gender,
    address : this.data.address,
    statuss:  this.data.statuss
  }
  console.log(detailsUser);
     this.http.post('http://localhost:4200/api/v1/users/signUp',detailsUser).subscribe(data=>{
      //  console.log(data);
     })
    //  alert("data submitted");
    this.toggleAnimation();
     }
     
     toggleAnimation(){
                 this._router.navigate(['dash']);
           }
   
  }


class taskData { 
	name: string;
	Bdate: string;
  email: string;
  phnum: string;
  gender: string = '1';
  address: string;
  statuss: string = '1'
}
