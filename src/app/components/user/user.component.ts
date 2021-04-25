import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id:number;
  name:Name;
  contacts:Contacts;
  tags:String[];
  constructor() { }

  ngOnInit(): void {
    this.id = 1;
    this.name = {
      first_name:'Andrew',
      last_name:'Ovchinnikov'
  };
    this.contacts = {
      phone_number:'88005535500',
      e_mail:'jobshniros@gmail.com'
    };
    this.tags = ["Fatman","Playboy","Gamer"];
  }

}
interface Name {
  first_name:String;
  last_name:String;
}
interface Contacts {
  phone_number:String;
  e_mail:String;
}
