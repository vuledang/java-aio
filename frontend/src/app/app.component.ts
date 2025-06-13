import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id?: number;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  users: User[] = [];
  newUser: User = {username: '', email: ''};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<User[]>('/api/users').subscribe(data => this.users = data);
  }

  addUser() {
    this.http.post<User>('/api/users', this.newUser).subscribe(() => {
      this.newUser = {username: '', email: ''};
      this.loadUsers();
    });
  }
}
