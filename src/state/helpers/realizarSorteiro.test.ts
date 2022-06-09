import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {

    test('cada participante não sorteie o o próprio nome', () => {
        const participantes = [
            'ana',
            'catarina',
            'juliana',
            'joao',
            'vinicius',
            'natalia'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto= sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})