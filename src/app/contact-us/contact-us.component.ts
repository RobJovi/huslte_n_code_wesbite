import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../animations/index';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':''}
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
