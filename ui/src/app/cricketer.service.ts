import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map , filter } from 'rxjs/operators';

import { Query , Cricketer } from './types';
@Injectable()
export class CricketerService {
  constructor(private apollo: Apollo) {}

  getAllCricketers(searchTerm: String) {
    console.log(searchTerm);
    return this.apollo.watchQuery<Query>({
        pollInterval: 1000,
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
        console.log(result);
        return result.data.allCricketers;
      }));
  }

  getCricketer(id: Number) {
    return this.apollo
      .watchQuery<Query>({
        pollInterval: 500,
        query: gql`
          query getCricketer(id: $id){
            name
            id
            country
          }
      `,
        variables: {
          id: id
        }
      })
      .valueChanges.pipe(map(result => result.data.allCricketers));
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
}
