const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for (let index = 0; index <= this.length -1; index++) {
    const result = callback(this[index], index)
    novoArrayMapeado.push(result);
  }
  return novoArrayMapeado
}

async function main() {
  try {
    const results = await service.obterPessoas(`a`)
    // const names = []
    // results.results.forEach(item => {
    //   names.push(item.name)
    // })

    // const names = results.results.map(pessoa => pessoa.name)

    const names = results.results.meuMap(function (pessoa, indice) {
      return `[${indice}] ${pessoa.name}`
    })
    console.log('name', names)

  } catch (error) {
    console.error(`DEU RUIM`, error)
  }  
}

main()