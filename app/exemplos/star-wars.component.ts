
import { Component, OnInit } from '@angular/core';
import { DataService } from './trupi.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'star-wars',
  templateUrl: 'star-wars.component.html',
  providers: [DataService, HTTP_PROVIDERS]
})

export class StarWarsComponent implements OnInit {
  private data: Object;

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getData().subscribe(data => {
      this.data = data.results;
      console.log(this.data);
    });
  }
}