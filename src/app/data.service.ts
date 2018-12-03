import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }
  // const headers = new HttpHeaders({'Content-Type':'application/json'});
  getUsers(){
    return this.http.get('http://localhost:4200/api/v1/users/userlist');
    // return this.http.get('http://localhost:4200/api/v1/data/dataList')
  }

  // getUser(userId){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  // }

  // getPosts(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts')
  // }
}
