import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs/Rx';
import {ElementRef,Renderer2} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  @ViewChild('img') el: ElementRef;
  loaded;
  text: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hrs",
    Minutes: "Mins",
    Seconds: "Secs",
    MilliSeconds: "MilliSeconds"
  };
  slides = [
    {img: "assets/slider/slide1.JPG"},
    {img: "assets/slider/slide2.JPG"},
    {img: "assets/slider/slide3.jpeg"},
    {img: "assets/slider/slide4.jpeg"},
    {img: "assets/slider/slide5.jpg"},
    {img: "assets/slider/slide6.jpeg"},
  ];
  slideConfig = {
    "dots": true,
    "slidesToShow": 1,
    "autoplay": true,
    "draggable": false,
    "autoplaySpeed": 4000,
  };

  constructor(public http: HttpClient) {
    this.loaded = true;
  }

}