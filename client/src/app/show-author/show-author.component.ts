import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
  authors = [
    { name: 'author 1'},
    { name: 'author 2'},
    { name: 'author 3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
