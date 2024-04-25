const {Verify} = require("../../commom/cpf")
describe('CPF', () => {
    it('Validação de CPF, deverá retornar true', () => {
        const res = Verify('11325451967');
        expect(res).toBe(true);
    })
    it('Validação de CPF, deverá retornar true', () => {
        const res = Verify('07500279914');
        expect(res).toBe(true);
    })
    it('Validação de CPF, deverá retornar false', () => {
        const res = Verify('07500279988');
        expect(res).toBe(false);
    })
})