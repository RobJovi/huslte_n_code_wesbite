import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import * as _ from "lodash";
import {fadeInAnimation} from './animations/index';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import Scrollbar from 'smooth-scrollbar';
import { HttpClient } from '@angular/common/http';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  providers: [NgsRevealConfig],
  host: {'[@fadeInAnimation]':''}
})
export class AppComponent {
  hidden = true;
  submit = false;
  moving= false;
  menuActive = false;
  success = false;
  failure = false;
  checking = true;
  logo ='assets/img/txt-home-logo.png';
  model = {
    email: ''
  };
  input = {
    email: false
  }
  private throttleOnScroll = _.throttle(() => this.onScroll(), 50, {});


  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public config: NgsRevealConfig, @Inject(DOCUMENT) private document: Document,private router: Router, private location: Location,public http: HttpClient){
        // customize default values of ng-scrollreveal directives used by this component tree
        config.duration = 10000;
        config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
        config.delay = 10000;
        config.scale = 0.9;
  }


  ngOnInit() {
      this.location.subscribe((ev:PopStateEvent, ) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev:any) => {
        
          if (ev instanceof NavigationStart) {
            if (ev.url != this.lastPoppedUrl){
              if(ev.url == "/programs/leadCs" || ev.url == "/programs/SCLA" || ev.url == "/programs/seals" || ev.url == "/programs/hustlencode" || ev.url == "/getInvolved/volunteer" || ev.url == "/getInvolved/mentor" || ev.url == "/getInvolved/fellowship"){
                
              }else{
                
                this.yScrollStack.push(window.scrollY);
              }
            }
          } else if (ev instanceof NavigationEnd) {
            if(ev.url == "/programs/leadCs" || ev.url == "/programs/SCLA" || ev.url == "/programs/seals" || ev.url == "/programs/hustlencode" || ev.url == "/getInvolved/volunteer" || ev.url == "/getInvolved/mentor" || ev.url == "/getInvolved/fellowship"){
              
            }
            else if (ev.url == this.lastPoppedUrl) {
                  this.lastPoppedUrl = undefined;
                  window.scrollTo(0, this.yScrollStack.pop());
            } else
                  window.scrollTo(0, 0);
          }
      });
  }

  title = 'app';
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.throttleOnScroll();
  }
  showMenu(){
    this.menuActive = !this.menuActive;
  }
  closeMenu(){
    this.menuActive = !this.menuActive;
  }
  onScroll(){
    let number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if( number > 1000){
      this.hidden = false;
    }else{
      this.hidden = true;
    }
  }
  inputCheck(key, input) {
    this.input[key] = !input;
  }
  onSubmit(data){
    this.submit = true;
    var payload = {
      "email" : data.model
    }

    this.http.post('https://txt-server.herokuapp.com/subscribe/saveSubscriber',payload).subscribe(
      (data) => {
        this.checking = false;
        this.success = true;
        this.model = {
          email:''
        }   
      },
      (err) => {
        this.checking = false;
        this.failure = true;
        console.log(err);
      });
  }
  exit(){
    this.submit = false;
    this.failure = false;
    this.success = false;
    this.checking =true;
  }


}

