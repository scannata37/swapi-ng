import { Component, OnInit } from '@angular/core';
import {PeopleApiService } from '../people-api.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  peoples;

  constructor(private peopleApiService: PeopleApiService) { }

  ngOnInit() {
    this.peopleApiService.getPeople().subscribe((data) => {
      console.log(data);
      this.peoples = data.results;
    });
  }
}
