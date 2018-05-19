export type Cricketer =  {
  id: String;
  name: String;
  country: String;
  age: Number;
}

export type Query = {
  allCricketers: Cricketer[];
}
