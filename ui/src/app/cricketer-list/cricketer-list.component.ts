import { Component, OnInit, Inject } from '@angular/core';
import { CricketerService } from '../cricketer.service';
import { Cricketer } from '../types';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { forwardRef } from '@angular/core';
@Component({
  selector: 'app-cricketer-list',
  templateUrl: './cricketer-list.component.html',
  styleUrls: ['./cricketer-list.component.css']
})
export class CricketerListComponent implements OnInit , OnChanges {
  searchTerm: String = '';
  cricketersList: Observable<Cricketer[]>;

  constructor(private cricketerService: CricketerService ) {

  }

  ngOnInit() {
    this.cricketerService.getSearchTerm().subscribe(input => {
      this.searchTerm = input;
      this.cricketersList = this.cricketerService.getAllCricketers(this.searchTerm);
    });
  }

  ngOnChanges() {
    this.cricketersList = this.cricketerService.getAllCricketers(this.searchTerm);
  }

}
