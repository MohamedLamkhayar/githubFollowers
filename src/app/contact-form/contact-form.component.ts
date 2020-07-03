import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ContactMethods = [{id:1, name:'email'},{id:2, name:'phone'},{id:3, name:'sms'}];
  constructor() { }

  ngOnInit() {
  }
  log(x){
    console.log(x)
  }
  submit(f){
    console.log(f);
  }
}
