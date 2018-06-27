import { Component } from '@angular/core';
import { CricketerService } from './cricketer.service';
import { CricketerListComponent } from './cricketer-list/cricketer-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput: String = '';

  constructor(private cricketerService: CricketerService) {}
  getSearchInput(event: any) {
    this.searchInput = event.target.value;
    this.cricketerService.updateSearchTerm(this.searchInput);
  }

}
