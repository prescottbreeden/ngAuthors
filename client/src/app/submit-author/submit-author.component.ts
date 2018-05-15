import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-submit-author',
  templateUrl: './submit-author.component.html',
  styleUrls: ['./submit-author.component.css']
})
export class SubmitAuthorComponent {
newAuthor = {
  name: ''
};

  constructor(
    private _httpService: HttpService, 
    private _router: Router) { }

  createAuthorService(newAuthor) {
    console.log(newAuthor)
    this._httpService.createAuthor(this.newAuthor).subscribe(data => {
      console.log(data);
      this._router.navigate(['/authors']);
    });
  }

}
