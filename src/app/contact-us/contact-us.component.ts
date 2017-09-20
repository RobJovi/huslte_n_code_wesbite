import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/index';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactUsComponent implements OnInit {
  // contact = {
  //   phoneNumber : ''
  // };
  submit = false;
  contact = {
    fullName: "roberto Sanchez",
    email: "robb1772@gmail.com",
    subject: "Help with stuff",
    comments: "hello this is a test",
    phoneNumber: '(213) 300-9188'
  }
  input = {
    fullName: false,
    email: false,
    phoneNumber: false,
    subject: false,
    comments: false
  }
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(contact){
    this.submit = true;
    console.log(contact);

    this.http.post("http://localhost:3000/contact/saveContact", contact).subscribe(data =>{
      console.log(data);
    })
  }
  inputCheck(key, input) {
    this.input[key] = !input;
  }
  formatNumber(tel) {
    var value = tel.toString().trim().replace(/^\+/, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    var country, city, number;

    switch (value.length) {
      case 10: // +1PPP####### -> C (PPP) ###-####
        country = 1;
        city = value.slice(0, 3);
        number = value.slice(3);
        break;

      case 11: // +CPPP####### -> CCC (PP) ###-####
        country = value[0];
        city = value.slice(1, 4);
        number = value.slice(4);
        break;

      case 12: // +CCCPP####### -> CCC (PP) ###-####
        country = value.slice(0, 3);
        city = value.slice(3, 5);
        number = value.slice(5);
        break;

      default:
        return tel;
    }

    if (country == 1) {
      country = "";
    }

    number = number.slice(0, 3) + '-' + number.slice(3);

    this.contact.phoneNumber =  (country + " (" + city + ") " + number).trim();
  }
}
