let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/* const bckpA = varA;

varA = varB;
varB = varC;
varC = bckpA; */

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);