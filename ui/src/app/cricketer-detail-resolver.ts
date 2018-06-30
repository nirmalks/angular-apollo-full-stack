import { Injectable } from '@angular/core';
import { map , filter } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Cricketer } from './types';
import { CricketerService } from './cricketer.service';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
@Injectable()
export class CricketerResolver implements Resolve<any> {
  cricketer: any;
  constructor(private cricketerService: CricketerService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.cricketerService.getCricketer(route.paramMap.get('id'));
  }
}
