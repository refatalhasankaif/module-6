"use strict";
//  generic function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString  = (value : string) => [value];
// const createArrayWithNumber  = (value : number) => [value];
// const createArrayWithBoolean = (value : boolean) => [value];
// const createArrayWithObject = (value : { 
//     id: number;
//     name: string;
// }) => [value];
// const arrString = createArrayWithString('Apple')
// const arrNumber = createArrayWithNumber(46587)
// const arrObject = createArrayWithObject({
//     id: 3445,
//     name: 'Jarpu',
// })
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric('apple');
const arrNumber = createArrayWithGeneric(544);
const arrObj = createArrayWithGeneric({
    id: 3454,
    name: 'refat'
});
const createArrayTuple = (param1, param2) => [param1, param2];
const createArrayTupleWithGeneric = (paramx, paramy) => [paramx, paramy];
const res1 = createArrayTupleWithGeneric("Refdasdfd", 3245);
//# sourceMappingURL=6-5.js.map