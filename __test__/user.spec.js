const { criarUsuario } = require('../server');

Run|Debug
test('criarUsuario retorna um objeto de usuario com ID 1', () => {

    const dadosEntrada = { name: 'Gabriel' }

    const resultado = criarUsuario(dadosEntrada);

    expect(resultado).toEqual({ nome: 'Gabriel', id: 1 });

});