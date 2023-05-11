import { Injectable } from "@angular/core";

export interface IUser {
  id: string;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  data: Array<IUser> = [
    {
      id: "1",
      name: "abc",
    },
  ];

  constructor() {}

  getUsers() {
    return this.data;
  }
}
