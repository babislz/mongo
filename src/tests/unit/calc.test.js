const { Soma, Sub, Mult, Div, Primo} = require("../../commom/calc")
describe('Calculadora', () => {
    it('deve retornar o resultado da soma de 1+2', () => {
        const res = Soma(1, 2);
        expect(res).toBe(3);
    })
    it('deve retornar o resultado da subtração de 2-1', () => {
        const res = Sub(2, 1);
        expect(res).toBe(1);
    })
    it('deve retornar o resultado da multiplicação de 2*3', () => {
        const res = Mult(2, 3);
        expect(res).toBe(6);
    })
    it('deve retornar o resultado da divisão de 6/2', () => {
        const res = Div(6, 3);
        expect(res).toBe(2);
    })
    it('deve retornar se um determinado número é primo ou não', () =>{
        const res = Primo(2);
        expect(res).toBe(true);        
    })
})