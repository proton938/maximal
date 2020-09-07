import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiParams } from './ApiParams';
  
@Injectable()
export class HttpService{

    apiParams: ApiParams;

    constructor(private http: HttpClient, api: ApiParams){
        this.apiParams = api;
    }

    getData() {
        return this.http.get('https://www.reddit.com/r/'+this.apiParams.theme+'/hot.json');
    }

}

