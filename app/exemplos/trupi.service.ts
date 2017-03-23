
import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private url = `http://swapi.co/api/films/`;

  constructor(private http: Http) {
  }

  getData(): Observable<any> {
    return this.http.get(this.url)
      .map((res: Response) => res.json());
  }
}