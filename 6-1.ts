// type assertion
let anything: any;

anything = 'Ura';

const any = (anything as string).length;
console.log(any);

const kgToGmConverter = (input: number | string): string | number | undefined => {
    if(typeof input === 'number') {
        console.log((input * 1000), "gm"); 
    } else if (typeof input === 'string') {
        const [value] = input.split(' ');
        console.log((Number(value) * 1000), 'gm');  
    }
    return undefined
}

const result = kgToGmConverter(40) as number;
result.valueOf;
kgToGmConverter("50 kg");

type CustomError = {
    message: string;
};

try {
} catch (err){
    console.log((err as CustomError).message);
    
}