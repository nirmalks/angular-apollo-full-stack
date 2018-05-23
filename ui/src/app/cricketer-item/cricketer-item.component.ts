import { Component, OnInit } from '@angular/core';
import { CricketerService } from '../cricketer.service';
import { Cricketer } from '../types';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-cricketer-item',
  templateUrl: './cricketer-item.component.html',
  styleUrls: ['./cricketer-item.component.css']
})
export class CricketerItemComponent implements OnInit {
  @Input() cricketer: Cricketer;

  constructor(private cricketerService: CricketerService) { }

  ngOnInit() {
  }

}
