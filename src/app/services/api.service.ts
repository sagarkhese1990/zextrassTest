import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum HttpReqMethod {
  POST,
  GET,
  DELETE,
  PUT,
  PATCH
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public Request(url: string, method: string, body?: object, options? : any) {

  
    try {
      if (method === HttpReqMethod.GET.toString()) {
        return this.httpClient.get<any>(url);
      } else if (method === HttpReqMethod.POST.toString()) {
        return this.httpClient.post<any>(url, body,options);
      } else if (method === HttpReqMethod.DELETE.toString()) {
        return this.httpClient.delete<any>(url);
      } else if (method === HttpReqMethod.PUT.toString()) {
        return this.httpClient.put<any>(url, body);
      } else if (method === HttpReqMethod.PATCH.toString()) {
        return this.httpClient.patch<any>(url, body);
      }
    } catch (error) {
      console.log('Error In api.service.ts at Method: Request. ' + error);
    }
  }
}

