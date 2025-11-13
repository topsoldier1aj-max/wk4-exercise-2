function sum(a){
    if (typeof n !== 'number' || n % 1 !==0){
        return 'The value passed is not a number';
    }
    let total = 0
    for (let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

function factorial(n){
    if (typeof n !== 'number' || n % 1 !== 0 || n < 0){
        return 'The value passed is not a valid non-negative integer';
    }
    let result = 1;
    for (let i = n; i > 0; i--){
        result *= i ;
    }
    return result;
}

function funkyMath(...args){
    if(args.length ===2){
        return args[1] - args[0];
    }
    else if(args.length === 3){
        return args.reduce((acc, curr) => acc + curr, 0);
    }
    else if(args.length === 4){
        const[a,b,c,d] = args;
        return (a+b) / (c+d);
    }
}

const currentArray = [1,2,33,45,6,44];
const oddNumbers = [];
for (let i = 0; i < currentArray.length; i++){
    if (currentArray[i] % 2 !== 0){
        oddNumbers.push(currentArray[i]);
    }
}
oddNumbers.sort((a,b) => a-b);
console.log(oddNumbers);

const me={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    favouriteColour: 'blue',
    dreamCar: 'Tesla'
}

me.favouriteFood = 'pizza';

delete me.age;
