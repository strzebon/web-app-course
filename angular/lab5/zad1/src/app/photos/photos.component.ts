import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos: any;
  error: any;
  loaded: boolean= false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(data => {
        this.photos = data;
        this.loaded = true;
      }, error => {
        this.error = error;
      });
  }

  showPhoto(id: any) {
    this.router.navigate([`/photos/${id}`]);
  }
  
}
