import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestSerService {

  constructor() { }

  getComment(){
    return "this is test serice"
  }
}
