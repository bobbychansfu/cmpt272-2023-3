import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpMod';
  i = new Date().getTime()
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('https://272.selfip.net/apps/mOoGQltV5b/collections/people/documents/')
      .subscribe((data)=>{
        console.log(data);
      })
  }
  add(){
    this.http.post('https://272.selfip.net/apps/mOoGQltV5b/collections/people/documents/',{
      "key": this.i.toString(),
      "data":"bobby"
    }).subscribe(
      (data:any)=>{
        console.log(data);
        
    })
  }
  delete(){
    // ...
  }
}
