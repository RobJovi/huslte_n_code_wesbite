import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import * as _ from "lodash";
import {fadeInAnimation} from './animations/index'

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
  constructor(@Inject(DOCUMENT) private document: Document){

  }



  title = 'app';
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.throttleOnScroll();
  }
  showMenu(){
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

