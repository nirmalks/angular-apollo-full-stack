import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule , Apollo } from 'apollo-angular';
import { HttpLinkModule , HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { CricketerListComponent } from './cricketer-list/cricketer-list.component';
import { CricketerItemComponent } from './cricketer-item/cricketer-item.component';
import { CricketerService } from './cricketer.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing';
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';
import { CricketerResolver } from './cricketer-detail-resolver';

@NgModule({
  declarations: [
    AppComponent,
    CricketerListComponent,
    CricketerItemComponent,
    CricketerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CricketerService, CricketerResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo , httpLink: HttpLink) {
    apollo.create({
        link: httpLink.create({ uri: 'http://localhost:4000/graphql'}),
        cache: new InMemoryCache()
    });
  }
}
