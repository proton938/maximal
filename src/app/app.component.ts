import { Component, OnInit} from '@angular/core';
import { HttpService} from './models/http.service';
import { ApiParams } from './models/ApiParams';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HttpService]
})

export class AppComponent implements OnInit {

	title = 'Сервис новостей www.reddit.com';

	apiParams: ApiParams;
	
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

	constructor(private httpService: HttpService, api: ApiParams) {
		this.apiParams = api;
	}

	ngOnInit(){
	}
	
	getNews(): void {
		this.apiParams.theme = (<HTMLInputElement>document.getElementById('themeNews')).value;
		this.httpService.getData()
			.subscribe(
				result => {
				  console.log(result);
				  this.newsArray = result;
				  
				  for (let i=0; i < this.newsArray.data.children.length; i++ ) {
					  let cr = new Date(this.newsArray.data.children[i].data.created*1000);
					  this.newsArray.data.children[i].data.created = ('0'+cr.getDate()).slice(-2) + '-' + ('0'+(Number(cr.getMonth())+1)).slice(-2) + '-' + cr.getFullYear();
				  }
				  
				  (<HTMLInputElement>document.getElementById('basicTemplate')).style.display = 'table';
				  
				}, error => {
				  console.log(error);
				  alert('Ресурс не обнаружен!');
				}
			);
	  }

}



