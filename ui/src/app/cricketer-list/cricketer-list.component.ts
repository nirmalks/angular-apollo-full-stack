import { Component, OnInit } from '@angular/core';
import { CricketerService } from '../cricketer.service';
import { Cricketer } from '../types';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
@Component({
  selector: 'app-cricketer-list',
  templateUrl: './cricketer-list.component.html',
  styleUrls: ['./cricketer-list.component.css']
})
export class CricketerListComponent implements OnInit , OnChanges {
  @Input() searchTerm: String;
  cricketersList: Observable<Cricketer[]>;

  constructor(private cricketerService: CricketerService) {

  }

  ngOnInit() {
    this.cricketersList = this.cricketerService.getAllCricketers(this.searchTerm);
  }

  ngOnChanges(): void {
    this.cricketersList = this.cricketerService.getAllCricketers(this.searchTerm);
  }

}
