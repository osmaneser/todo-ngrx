import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  post(url: string, body: any, header?: HttpHeaders) {
    return this.http.post(`${environment.url}${url}`, body);
  }

  postWithQuery(url: string, query:any, body: any, header?: HttpHeaders) {

    var queryFull = '';
    if (query != null || query != undefined) {
      Object.getOwnPropertyNames(query).forEach((key, index) => {
        queryFull += (index == 0 ? '?' : '&') + key + '=' + query[key];
      });
    }
    return this.http.post(`${environment.url}${url}${queryFull}`, body);
  }

  get(url: string, query?: any[]): any {

    var queryFull = '';
    if (query != null || query != undefined) {
      Object.getOwnPropertyNames(query).forEach((key, index) => {
        queryFull += (index == 0 ? '?' : '&') + key + '=' + query[key];
      });
    }

    return this.http.get(`${environment.url}${url}${queryFull}`);
  }
}
