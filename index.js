const a = [2, 6];
const b = [24, 36];

// determiner l'ensemble des multiples des elts de a 
// determiner le ppcm
const ppcm = 6;
let pgcd = 12;
let m = [];
for (let i = 1; i * ppcm <= Math.min(...b); i++) {
    if (pgcd % (ppcm * i) === 0)
        m.push(ppcm * i);

}
console.log(m);
// determiner l'ensemble des diviseurs des elts de b
// determiner le pgcd
