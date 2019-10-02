import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {
  public getPeople() {
    return this.httpClient.get<string>('https://swapi.co/api/people/');
  }
  constructor(private httpClient: HttpClient) { }
}
