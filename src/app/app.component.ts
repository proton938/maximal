import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { HttpService} from './models/http.service';
import { ApiParams } from './models/ApiParams';

import { PagerComponent } from './pager/pager.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HttpService, PagerComponent]
})

export class AppComponent implements OnInit {

	title = 'Сервис новостей www.reddit.com';
	apiParams: ApiParams;
	location: Location;
	pageComponent: PagerComponent;

	constructor(private httpService: HttpService, private router: Router, location: Location, api: ApiParams, page: PagerComponent ) {
		this.apiParams = api;
		this.location = location;
		this.pageComponent = page;
	}

	ngOnInit(){
	}
	
	goToPageNews() {
		this.apiParams.theme = (<HTMLInputElement>document.getElementById('themeNews')).value;
		this.router.navigate(['page', this.apiParams.theme]);
		(<HTMLInputElement>document.getElementById('themeNews')).value = '';
	}
	
	backPage() {
		this.location.back();
	}
	
	nextPage() {
		this.location.forward();
	}
}



