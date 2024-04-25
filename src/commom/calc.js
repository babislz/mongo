function Soma(a, b) {
    return a + b;
}
function Sub(a, b) {
    return a - b;
}
function Mult(a, b){
    return a * b;
}
function Div(a, b){
    return a / b;
}
function Primo(a){
    if(a <= 1)
    {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true; 
}
module.exports = { Soma, Sub, Mult, Div, Primo}


