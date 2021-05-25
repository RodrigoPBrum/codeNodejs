const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`)
        const pesos = results.map(item => parseInt(item.height))
        //parse em numero inexistente retorna NaN
        console.log(`pesos`, pesos)
        // [20.2, 30.3, 40.5] = 0
        // const total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // }, 0) //inicializar o array se vazio

        const minhaLista = [
            ['Rodrigo', 'Brum'],
            ['NodeBR', 'Nerdzao']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, []) //tipo definido pelo valor inicial
        .join(', ')
        console.log('total', total)


    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()