import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  postServices(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(this.baseurl + url, reqdata, token && httpOptions)
  }
  putServices(url: string, reqdata: any, token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.put(this.baseurl + url,reqdata, token && httpOptions)
  }
  getServices(url: string,  token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.get(this.baseurl + url, token && httpOptions)
  }
  deleteServices(url: string,  token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.delete(this.baseurl + url, token && httpOptions)
  }
  archieveServices(url: string,  token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.put(this.baseurl + url, token && httpOptions)
  }
}

