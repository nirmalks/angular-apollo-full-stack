import mongoose from 'mongoose';
import cricketerModel from './models/cricketer';
import cricketer from './models/cricketer';

const resolvers = {
    Query: {
        allCricketers: (root, {searchTerm}) => {
            if(searchTerm !== '') {
                return cricketerModel.find({$text: {$search: searchTerm}}).sort({name: 'asc'});
            } else {
                return cricketerModel.find().sort({name: 'asc'});
            }       
        },
        getCricketer: (root , {id}) => {
            return cricketerModel.findOne({id: id});
        }
    },
    Mutation: {
        addCricketer: (root , { name, country , age}) => {
            const cricketer = new cricketerModel({name: name, country: country , age: age });
            return cricketer.save();
        },
        updateCricketer: (root , { id, name, country , age}) => {
            return cricketerModel.findOneAndUpdate({id: id}, {$set: {name: name, country: country , age: age }}, {new:  true});
        }
    }
}

export default resolvers;