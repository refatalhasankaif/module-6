"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type assertion
let anything;
anything = 'Ura';
const any = anything.length;
console.log(any);
const kgToGmConverter = (input) => {
    if (typeof input === 'number') {
        console.log((input * 1000), "gm");
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        console.log((Number(value) * 1000), 'gm');
    }
    return undefined;
};
const result = kgToGmConverter(40);
result.valueOf;
kgToGmConverter("50 kg");
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=6-1.js.map