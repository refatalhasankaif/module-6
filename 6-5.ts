//  generic function

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


const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}

const arrString = createArrayWithGeneric<string>('apple')
const arrNumber = createArrayWithGeneric<number>(544)
const arrObj = createArrayWithGeneric<object>({
    id: 3454,
    name: 'refat'
})

const createArrayTuple = (param1: {
    id: number;
    name: string;
}, param2: number) => [param1, param2];

const createArrayTupleWithGeneric = <X, Y>(paramx: X, paramy: Y, ) => [paramx, paramy];
const res1 = createArrayTupleWithGeneric<string, number>("Refdasdfd", 3245);


