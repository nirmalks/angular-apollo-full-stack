import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map , filter } from 'rxjs/operators';

import { Query , Cricketer } from './types';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'apollo-link';
@Injectable()
export class CricketerService {
  constructor(private apollo: Apollo) {}
  private searchInput: BehaviorSubject<String> = new BehaviorSubject<String>('');

  getAllCricketers(searchTerm: String) {
    return this.apollo.watchQuery<Query>({
        pollInterval: 10000,
        query: gql`
        query allCricketers($searchTerm: String){
          allCricketers(searchTerm: $searchTerm){
            name
            id
            country
            age
          }
        }
        `,
        variables: {
          searchTerm: searchTerm
        }
      })
      .valueChanges.pipe(map(result => {
        return result.data.allCricketers;
      }));
  }

  getCricketer(id: String) {
    return this.apollo
      .query<Query>({
        query: gql`
          query getCricketer($id: String!){
            getCricketer(id: $id) {
              name
              id
              country
            }
          }
      `,
        variables: {
          id: id
        }
      });
  }

  addCricketer(name: String, country: String, age: Number) {
    return this.apollo.mutate({
      mutation: gql`
        mutation addCricketer(name: $name,country: $country, age: $age){
          id
          name
          country
          age
        }
      `,
      variables: {
        name: name,
        country: country,
        age: age
      }
    });
  }

  updateCricketer(id: String, name: String, country: String, age: Number) {
    return this.apollo.mutate({
      mutation: gql`
          mutation updateCricketer(id: $id , name: $name,country: $country, age: $age){
            id
            name
            country
            age
          }
        `,
      variables: {
        id: id,
        name: name,
        country: country,
        age: age
      }
    });
  }

  updateSearchTerm(searchInput: String) {
    this.searchInput.next(searchInput);
  }

  getSearchTerm() {
    return this.searchInput.asObservable();
  }
}
