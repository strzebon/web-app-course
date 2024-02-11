import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];
  postObject = {
    userId: 123,
    id: 0,
    title: "",
    body: ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => this.posts = posts);
  }
  
  onSubmit(title: string, body: string) {
    this.postObject.title = title;
    this.postObject.body = body;
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.postObject)
      .subscribe((res) => {
        console.log('Post został dodany na serwer');
        this.posts.unshift(res);
      });

    return false;
  }
}
