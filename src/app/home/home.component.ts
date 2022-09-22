import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  head = this.document.getElementsByClassName('myHomeComponenet');
  style = this.document.createElement('link');
  

  constructor(@Inject(DOCUMENT) private document: Document) { }
  cssFIles = ['/assets/bootstrap.min.css','/assets/bulma.css', '/assets/materialize.min.css']
  currentIndex = 0
  currentCSSFile = ''
  ngOnInit(): void {
    this.style.rel = 'stylesheet'
    this.setStyleSheet()
  }

  setStyleSheet(){
    const newIndex = Math.floor(Math.random() * 2)
    this.currentIndex = this.currentIndex === newIndex?this.currentIndex+1:newIndex
    this.currentCSSFile = this.cssFIles[this.currentIndex];
    this.style.href = this.currentCSSFile
    this.head[0].appendChild(this.style);
    console.log(this.style.href)
  }

}
