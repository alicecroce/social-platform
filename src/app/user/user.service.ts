import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users=[
    {id: 1, name: "Maria Tuttoilmondo"},
    {id: 2, name: "Rosalia Tuttoilmondo"},
  ]

  constructor() { }

  getUsers(){
    return of(this.users);
  }
}
