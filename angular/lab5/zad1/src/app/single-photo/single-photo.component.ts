import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css']
})
export class SinglePhotoComponent {
  photo: any;
  error: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const photoId = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .subscribe(data => {
        this.photo = data;
      }, error => {
        this.error = error;
      });
  }
}
