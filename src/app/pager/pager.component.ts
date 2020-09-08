import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { HttpService} from '../models/http.service';
import { ApiParams } from '../models/ApiParams';

@Injectable()
@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
	
	location: Location;
	apiParams: ApiParams;

  constructor(private httpService: HttpService, private router: Router, api: ApiParams, location: Location, ) { 
	this.apiParams = api;
	this.location = location;
	
	var hash: any = String(this.location.path());
	hash = hash.split('/');
	
	this.apiParams.theme = hash[2];
	
	this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }
  }
  
  newsArray: any = {
	  data: {
		children: [
		  {
			data: { 
			  author_fullname: '', 
			  title: '',
			  created: '',
			  url: ''
			}
		  }
		]
	  }
	};

  ngOnInit() {
	  if (this.apiParams.theme != '') {
		  this.getNews();
	  }
  }
  
  
  getNews(): void {
		this.httpService.getData()
			.subscribe(
				result => {
				  console.log(result);
				  this.newsArray = result;
				  for (let i=0; i < this.newsArray.data.children.length; i++ ) {
					  let cr = new Date(this.newsArray.data.children[i].data.created*1000);
					  this.newsArray.data.children[i].data.created = ('0'+cr.getDate()).slice(-2) + '-' + ('0'+(Number(cr.getMonth())+1)).slice(-2) + '-' + cr.getFullYear();
					  (<HTMLInputElement>document.getElementById('basicTemplate')).style.display = 'table';
				  }
				  
				}, error => {
				  console.log(error);
				  alert('Ресурс не обнаружен!');
				}
			);
	  }

}
