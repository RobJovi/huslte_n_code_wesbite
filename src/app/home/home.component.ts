import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutUs = true;
  ourStory = false;
  ourMission = false;
  ourTeam = false;
  links = [true, false, false, false];
  content = [true, false, false, false];
  aboutUsContent = ['inactive', 'inactive'];
  currentState = ['in', 'out', 'out', 'out'];

  slides0 = [false, false, false, false];
  slides1 = [false, false, false, false];

  reset;
  showContent=[true,false,false,false,false,false,false,false];  
  imgSrc = [];
  model = {
    email: ''
  };
  constructor(public http: HttpClient) { 
    this.imgSrc = [
      'assets/circle/Computer.png',
      'assets/circle/Award.png',
      'assets/circle/School.png',
      'assets/circle/People.png',
      'assets/circle/Hat.png',
      'assets/circle/Case.png',
      'assets/circle/Hands.png'
    ]
  }
  showInfo(num){
    this.showContent=[false,false,false,false,false,false,false,false]; 
    this.showContent[num]= true; 

    this.imgSwap(num);
  }
  imgSwap(num){
    if(this.reset){
      this.resetImg(this.reset);
    }
    if(num == 1){
      this.imgSrc[0] = 'assets/circle/Computer-alt.png';
    }else if( num ==2){
      this.imgSrc[1] = 'assets/circle/Award-alt.png';
    }else if(num == 3){
      this.imgSrc[2] = 'assets/circle/School-alt.png';
    }else if( num ==4){
      this.imgSrc[3] = 'assets/circle/People-alt.png';
    }else if(num == 5){
      this.imgSrc[4] = 'assets/circle/Hat-alt.png';
    }else if( num == 6){
      this.imgSrc[5] = 'assets/circle/Case-alt.png';
    }else if(num == 7){
      this.imgSrc[6] = 'assets/circle/Hands-alt.png';
    }
    this.reset = num;
  }

  resetImg(num){
    if(num == 1){
      this.imgSrc[0] = 'assets/circle/Computer.png';
    }else if( num ==2){
      this.imgSrc[1] = 'assets/circle/Award.png';
    }else if(num == 3){
      this.imgSrc[2] = 'assets/circle/School.png';
    }else if( num ==4){
      this.imgSrc[3] = 'assets/circle/People.png';
    }else if(num == 5){
      this.imgSrc[4] = 'assets/circle/Hat.png';
    }else if( num == 6){
      this.imgSrc[5] = 'assets/circle/Case.png';
    }else if(num == 7){
      this.imgSrc[6] = 'assets/circle/Hands.png';
    }
  }

  ngOnInit() {
    var _this = this;
    (<any>$('.carousel-class')).on('init', function (event, slick, currentSlide, nextSlide) {
      console.log("init");
      _this.animateTitleSet(0);
    });
    (<any>$('.carousel-class')).on('afterChange', function (event, slick, currentSlide, nextSlide) {
      _this.animateTitleSet(currentSlide);
    });
    (<any>$('.carousel-class')).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
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
  hoverCircle(num){
    if(num == 1){
      this.imgSrc[0] = 'assets/circle/Computer-alt.png';
    }else if( num ==2){
      this.imgSrc[1] = 'assets/circle/Award-alt.png';
    }else if(num == 3){
      this.imgSrc[2] = 'assets/circle/School-alt.png';
    }else if( num ==4){
      this.imgSrc[3] = 'assets/circle/People-alt.png';
    }else if(num == 5){
      this.imgSrc[4] = 'assets/circle/Hat-alt.png';
    }else if( num == 6){
      this.imgSrc[5] = 'assets/circle/Case-alt.png';
    }else if(num == 7){
      this.imgSrc[6] = 'assets/circle/Hands-alt.png';
    }
  }
  hoverCircleAlt(num,condition){
    if(condition == false){
      if(num == 1){
        this.imgSrc[0] = 'assets/circle/Computer.png';
      }else if( num ==2){
        this.imgSrc[1] = 'assets/circle/Award.png';
      }else if(num == 3){
        this.imgSrc[2] = 'assets/circle/School.png';
      }else if( num ==4){
        this.imgSrc[3] = 'assets/circle/People.png';
      }else if(num == 5){
        this.imgSrc[4] = 'assets/circle/Hat.png';
      }else if( num == 6){
        this.imgSrc[5] = 'assets/circle/Case.png';
      }else if(num == 7){
        this.imgSrc[6] = 'assets/circle/Hands.png';
      }
    }
  }
  onSubmit(data){
    var payload ={
      "email_address": data.model
    }
    this.http.post('http://urbantxt.us6.list-manage.com/subscribe/post?u=635de96fdd&id=ff9c7434c1',payload).subscribe(data =>{
      console.log(data);
    })
  }
  resetTitleSets(num) {
    this.slides0 = [false, false, false, false];
    this.slides1 = [false, false, false, false];
  }

  animateTitleSet(num) {
    var _this = this;
    if (num == 0) {
      setTimeout(function () {
        _this.slides0[0] = true;
        setTimeout(function () {
          _this.slides0[1] = true;
        }, 400);
        setTimeout(function () {
          _this.slides0[2] = true;
        }, 500);
        setTimeout(function () {
          _this.slides0[3] = true;
        }, 500);
      }, 1000);
    } else if (num == 1) {
      setTimeout(function () {
        _this.slides1[0] = true;
        setTimeout(function () {
          _this.slides1[1] = true;
        }, 400);
        setTimeout(function () {
          _this.slides1[2] = true;
        }, 500);
        setTimeout(function () {
          _this.slides1[3] = true;
        }, 500);
      }, 1000);
    }
  }

  animationDone(e: Event) {
    console.log(e);
  }
  animate() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 2000);
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