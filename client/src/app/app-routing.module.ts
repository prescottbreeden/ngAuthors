import { ShowAuthorComponent } from "./show-author/show-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { SubmitAuthorComponent } from "./submit-author/submit-author.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'author', component: ShowAuthorComponent},
    { path: 'new', component: SubmitAuthorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }