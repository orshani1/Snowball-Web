import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { WorksService } from '../works.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  works: any = [];
  ratings :any = [];
  isShow: any = false;
  cardClicked: boolean = false;
  isPhone: boolean = false;
  windowWidth: any;
  constructor(
    private service: WorksService,
    @Inject(DOCUMENT) document: Document
  ) {}
  ngOnInit(): void {
    this.ratings = this.service.ratings;
    this.works = this.service.works;
    this.windowWidth = window.innerWidth;
    console.log(this.works);
    if (this.windowWidth < 500) {
      this.isPhone = true;
    }
  }
  cardClick(value: any, i: number) {
    let obj = document.getElementById(`n${i}`);
    this.cardClicked = !this.cardClicked;
    if (obj && this.cardClicked) {
      let length = value.images.length;
      let random = Math.floor(Math.random() * length);
      obj.style.backgroundImage = `url(${value.images[random].source})`;
      obj.style.backgroundSize = 'cover';
      obj.innerHTML = '';
    }
    if (obj && !this.cardClicked) {
      obj.style.backgroundImage = 'none';
      obj.innerText = `${value.location}`;
    }
  }
  showMore(value: any) {
    this.isShow = !this.isShow;
    let modal = document.getElementById('myModal');
    let content = document.getElementById('modal-content');
    if (modal) {
      modal.style.display = 'block';
      window.onclick = function (event) {
        if (event.target == modal && modal) {
          modal.style.display = 'none';
        }
      };
    }
    if(content){
      content.innerHTML = `<p>${value.location}</p>\n
            <p>${value.desc}</p>
            <p>שביעות רצון : ${value.rate}</p>`
    }

  }
}
