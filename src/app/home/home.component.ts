import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({display:'block',opacity:1})),
      state('out', style({display:'none',opacity:0})),
      transition('* => in', [
        animate(300, keyframes([
          style({display: 'block', offset:0}),
          style({opacity: 0, offset: 0.3}),
          style({opacity: 1,     offset: 1.0})
        ]))
      ]),
      transition('* => out', [
        animate(350, keyframes([
          style({opacity: 1, offset: 0}),
          style({opacity: 0, offset: 0.9}),
          style({display: 'none', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  aboutUs = true;
  ourStory = false;
  ourMission = false;
  ourTeam = false;
  links = [true,false,false,false];
  content = [true,false,false,false];
  aboutUsContent = ['inactive','inactive'];
  currentState = ['in','out','out','out'];

  slides0 = [false,false,false,false];
  slides1 = [false,false,false,false];

  constructor() { 
    
  }



  ngOnInit() {


    var _this = this;
    (<any>$('.carousel-class')).on('init', function(event, slick, currentSlide, nextSlide){
      console.log("init");   
       _this.animateTitleSet(0);
    });
    (<any>$('.carousel-class')).on('afterChange', function(event, slick, currentSlide, nextSlide){
       _this.animateTitleSet(currentSlide);
    });
    (<any>$('.carousel-class')).on('beforeChange', function(event, slick, currentSlide, nextSlide){
       _this.resetTitleSets(currentSlide);
    });

    (<any>$('.carousel-class')).slick({
          autoplay: true,
          centerMode: true,
          centerPadding: '0',
          autoplaySpeed: 5500,
          slidesToShow: 1,
          dots: true,
          fade: true,
          arrows: true,
          nextArrow: '<i class="fa fa-chevron-right fa-2x"></i>',
          prevArrow: '<i class="fa fa-chevron-left fa-2x"></i>',
    
    });

  }

  resetTitleSets(num){
    this.slides0 = [false,false,false,false];
    this.slides1 = [false,false,false,false];
  }

  animateTitleSet(num){
    var _this = this;
    if(num == 0){
      setTimeout(function(){
        _this.slides0[0] = true;
        setTimeout(function(){
          _this.slides0[1] = true;
        },400);
        setTimeout(function(){
          _this.slides0[2] = true;
        },500);
        setTimeout(function(){
          _this.slides0[3] = true;
        },500);
      },1000);
    }else if( num == 1){
      setTimeout(function(){
        _this.slides1[0] = true;
        setTimeout(function(){
          _this.slides1[1] = true;
        },400);
        setTimeout(function(){
          _this.slides1[2] = true;
        },500);
        setTimeout(function(){
          _this.slides1[3] = true;
        },500);
      },1000);
    }
  }

  animationDone(e: Event){
    console.log(e);
  }
  animate(){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#map").offset().top
    }, 2000);
  }
  aboutUsContentChange(num){
    if(!(this.links[num] == true)){
      this.links = [false,false,false,false];
      this.links[num] = true;
      this.changeState(num);
    }

  }
  changeState(num){
    this.currentState = ['out','out','out','out'];
    setTimeout(()=>{
      this.currentState[num] = 'in'; 
    },295);
    
  }

}



// animations: [
//   trigger('heroState', [
//     state('inactive', style({ 
//       opacity: 0,
//       display: 'none'
//     })),
//     state('active',   style({
//       opacity: 1,
//       display: 'flex'
//     })),
//     transition('inactive => active', animate('500ms ease-in')),
//     transition('active => inactive', animate('500ms ease-out'))
//   ]),
//   trigger('teamState', [
//     state('inactive', style({ 
//       opacity:0,
//       display: 'none'
//     })),
//     state('active',   style({
//       opacity: 1,
//       display: 'flex'
//     })),
//     transition('inactive => active', animate('10ms ease-in')),
//     transition('active => inactive', animate('500ms ease-out'))
//   ])
// ]



// aboutUsChange(num){
//   this.reset();
//   this.links[num] = true;
//   setTimeout(() => {
//     this.content[num] =  (this.content[num] === 'inactive' ? 'active' : 'inactive')
//   }, 400);
  
// }
// teamChange(num){
//   this.reset();
//   this.links[num] = true;
//   setTimeout(() => {
//     this.content[num] =  (this.content[num] === 'inactive' ? 'active' : 'inactive')
//   }, 400);

// }

// reset(){
//   this.links = [false,false,false,false];
//   this.content = ['inactive','inactive','inactive','inactive'];
//   this.aboutUsContent = ['inactive','inactive'];
// }




// setTimeout(function(){
//   $('.title-1').addClass('title-animate-go');
//   setTimeout(function(){
//     $('.title-2').addClass('title-animate-go');
//   },400);
//   setTimeout(function(){
//     $('.title-3').addClass('title-animate-go');
//   },500);
//   setTimeout(function(){
//     $('.title-4').addClass('title-animate-go');
//   },500);
// },1000);