/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir de seu Id
  2 Obter o endereco do usuario pelo Id
 */
//importamos um modulo interno do node.js
const util = require('util')
const getAsyncAddress = util.promisify(getAddress)

function getUser() {
  //when error occurs -> reject(Error)
  //when sucess -> RESOLV
  return new Promise(function solvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'))
      return resolve({
        id: 1,
        name: 'Aladin',
        birthDate: new Date()
      })
    }, 1000);
    
  })
}

function getPhone(UserId) {
  return new Promise(function solvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone: '1199002',
        ddd: 11
      })
    }, 2000);
    
  })
}

function getAddress (UserId, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'dos bobos',
      number: 0
    })
  }, 2000);
}

main()
//First step - add word async -> automatically it will return a promise
async function main() {
  try {
    console.time('medida-promise')
    const user = await getUser()
    // const phone = await getPhone(user.id)
    // const address = await getAsyncAddress(user.id)

    const result = await Promise.all([
      getPhone(user.id),
      getAsyncAddress(user.id)
    ])

    const address = result[1]
    const phone = result[0]

    console.log(`
      Nome: ${user.name},
      Telefone: (${phone.ddd}) ${phone.phone},
      Endereco: ${address.street}, ${address.number}
    `)
    console.timeEnd('medida-promise')
  }
  catch (error) {
    console.error('DEU RUIM', error)
  }
}

// const userPromise = getUser()
// //user -> phone -> phone
// userPromise
//   .then(function (user) {
//     return getPhone(user.id)
//     .then(function solvePhone(result) {
//       return {
//         user: {
//           name:user.name,
//           id:user.id
//         },
//         phone: result
//       }
//     })
//   })
//   .then(function (resultado) {
//     const address = getAsyncAddress(resultado.user.id)
//     return address.then(function solveAddress(result) {
//       return {
//         user: resultado.user,
//         phone:resultado.phone,
//         address: result
//       }
//     })
//   })
//   .then(function (resultado) {
//     console.log(`
//       Nome: ${resultado.user.name}
//       Endereco: ${resultado.address.street}, ${resultado.address.number}
//       Telefone: (${resultado.phone.ddd}) ${resultado.phone.phone}
//     `)
//   })
//   .catch(function (error) {
//     console.error('DEU RUIM', error)
//   })

// function solveUser(err, user) {
//   console.log('usuario', user)
  
// }

//to manipulate success we use the function .then
//to manipulate errors, we use the .catch

// getUser(function solveUser(err, user) {
//   //null|| "" || 0 === false
//   if (err) {
//     console.log('DEU RUIM em USUARIO', err)
//     return;
//   }
//   getPhone(user.id, function solvePhone(err1, phone) {
//     if (err1) {
//       console.log('DEU RUIM em TELEFONE', err1)
//       return;
//     }
//     getAddress(user.id, function solveAddress(err2, address) {
//       if (err2) {
//         console.log('DEU RUIM em ENDERECO', err2)
//         return;
//       }
//       console.log(`
//       Nome ${user.name},
//       Endereco ${address.street}, ${address.number}
//       Telefone ${phone.ddd}, ${phone.phone}
//       `)
//     })
//   })
// })
// const phone = getPhone(user.id)

// console.log('telefone', phone)