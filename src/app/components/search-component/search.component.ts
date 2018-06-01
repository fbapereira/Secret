import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.scss']
})

export class SearchComponent {

  isSearchButtonVisible = false;

  changeView(): void {
    this.isSearchButtonVisible = !this.isSearchButtonVisible;
  }
}
