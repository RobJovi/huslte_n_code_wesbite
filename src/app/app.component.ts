import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import * as _ from "lodash";
import {fadeInAnimation} from './animations/index';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':''}
})
export class AppComponent {
  moving= false;
  menuActive = false;
  logo ='assets/img/logo-white.png';
  private throttleOnScroll = _.throttle(() => this.onScroll(), 50, {});


  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,private router: Router, private location: Location){

  }


  ngOnInit() {
      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev:any) => {
        
          if (ev instanceof NavigationStart) {
            console.log(ev.url);
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
    console.log("closing menu")
    this.menuActive = !this.menuActive;
  }
  onScroll(){
    let number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if( number > 100){
      this.moving = true;
      this.logo = 'assets/img/txt-home-logo.png'
    }else{
      this.moving = false;
      this.logo = 'assets/img/logo-white.png'
    }
  }


}

