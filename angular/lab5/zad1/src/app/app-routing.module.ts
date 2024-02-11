import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts' , component: PostsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'photos/:id', component: SinglePhotoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
