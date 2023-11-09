const a = [2, 6];
const b = [24, 36];

// determiner l'ensemble des multiples des elts de a 
// determiner le ppcm
function ppcm(a){
    if(a.length===2) return ppcm2(a[0], a[1]);
    return ppcm([ppcm2(a[0], a[1]), ...a.slice(2)]);
}
function pgcd(a){
    return;
}
function ppcm2(a,b){
    let ppcm =  (a*b)/pgcd2(a,b);
    return ppcm;
}
function pgcd2(a,b){
    // console.log(a, b)
    if(a===b) return a;
    return pgcd2(Math.abs(a-b), Math.min(a,b));
}
const pcm = ppcm(a);
let gcd = pgcd(b);
let m = [];
for (let i = 1; i * pcm <= Math.min(...b); i++) {
    if (gcd % (pcm * i) === 0)
        m.push(pcm * i);

}
console.log(ppcm([63, 12, 15]));
console.log(pgcd2(252, 105));
console.log(pgcd2(24, 36));
// determiner l'ensemble des diviseurs des elts de b
// determiner le pgcd
