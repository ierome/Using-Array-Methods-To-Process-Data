const sum = items.reduce(function(a,b) {
    return a + b.price
}, 0) / items.length

const arr14 = items.filter(function(item) {
    if (item.price < 18 && item.price > 14) {
        return true;
    } else {
        return false;
    }
}).map(function(a){
    return a.title;
}).join("\n")

const arr15 = items.filter(function(item) {
    if (item.currency_code.includes('GBP')) {
        return true;
    }
}).map(function(a) {
    return a.title + " costs £" + a.price;
})

const arr16 = items.filter(function(item) {
    if (item.materials.includes('wood')) {
        return true;
    }
}).map(function(a){
    return a.title + ' is made of wood.';
}).join('\n')

const arr17 = items.filter(function(item) {
    if (item.materials.length >= 8) {
        return true;
    }
}).map(function(a) {
    return a.title + ' has 9 materials\n' + a.materials.join('\n');
}).join('\n')

const arr18 = items.filter(function(item) {
    if(item.who_made.includes('i_did')) {
        return true;
    }
}).length + ' were made by their sellers';

const answer1 = sum.toFixed(2);
const answer2 = arr14;
const answer3 = arr15;
const answer4 = arr16;
const answer5 = arr17;
const answer6 = arr18;

document.querySelector('#answer1').innerHTML= answer1;
document.querySelector('#answer2').innerHTML= answer2;
document.querySelector('#answer3').innerHTML= answer3;
document.querySelector('#answer4').innerHTML= answer4;
document.querySelector('#answer5').innerHTML= answer5;
document.querySelector('#answer6').innerHTML= answer6;