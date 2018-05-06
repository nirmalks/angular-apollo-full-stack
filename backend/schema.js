import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [`
    type Cricketer {
        id: String,
        name: String,
        country: String,
        age: Int
    },
    type Query {
        allCricketers(searchTerm: String): [Cricketer]
        getCricketer(id: String!): Cricketer    
    }
    type Mutation {
        addCricketer(name: String ,country: String , age: Int): Cricketer,
        updateCricketer(id: String! , name: String ,  country: String , age: Int): Cricketer,
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;