import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const cricketerSchema = new Schema({
  id: {type: String , default: uuid.v1 },
  name: String,
  country: String,
  age: Number
});

cricketerSchema.index({"$**":"text"});

const model = mongoose.model('cricketer',cricketerSchema);

export default model;