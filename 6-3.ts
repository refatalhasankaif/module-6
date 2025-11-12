// dynamically generalize


type GenericArray<value> = Array<value>;

const friends : string[] = ['a', 'b', 'c', 'd', 'e'];
const friendsArray : Array<string> = ['a', 'b', 'c', 'd', 'e'];
const friendsGArray : GenericArray<string> = ['a', 'b', 'c', 'd', 'e'];

const rollNumber : number[] = [1, 2, 3, 4, 5];
const rollNumberArray : Array<number> = [1, 2, 3, 4, 5];
const rollNumberGArray : GenericArray<number> = [1, 2, 3, 4, 5];

const isEligibleList : boolean[] = [true, false, true, false, false];
const isEligibleListArray : Array<boolean> = [true, false, true, false, false];
const isEligibleListGArray : GenericArray<boolean> = [true, false, true, false, false];

type Coordinates<X, Y> = [X, Y];

const coordinates : Coordinates<number, number> = [20, 40];
const coordinatesString : Coordinates<string, string> = ["20", "40"];

