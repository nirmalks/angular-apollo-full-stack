import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cricketer-detail',
  templateUrl: './cricketer-detail.component.html',
  styleUrls: ['./cricketer-detail.component.css']
})
export class CricketerDetailComponent implements OnInit {
  cricketer: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cricketer = this.route.snapshot.data.cricketer;
    console.log(this.cricketer)
  }

}
