import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  
  }

  goHome() {
    this._router.navigate(['/author']);
  }
  goSubmitAuthor() {
    this._router.navigate(['/author/new']);
  }
}
