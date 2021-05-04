/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir de seu Id
  2 Obter o endereco do usuario pelo Id
 */

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Aladin',
      birthDate: new Date()
    })
  }, 1000);
}

function getPhone(UserId, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: '1199002',
      ddd: 11
    })
  }, 2000);
}

function getAddress (UserId, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'dos bobos',
      number: 0
    })
  }, 2000);
}

function solveUser(err, user) {
  console.log('usuario', user)
  
}

getUser(function solveUser(err, user) {
  //null|| "" || 0 === false
  if (err) {
    console.log('DEU RUIM em USUARIO', err)
    return;
  }
  getPhone(user.id, function solvePhone(err1, phone) {
    if (err1) {
      console.log('DEU RUIM em TELEFONE', err1)
      return;
    }
    getAddress(user.id, function solveAddress(err2, address) {
      if (err2) {
        console.log('DEU RUIM em ENDERECO', err2)
        return;
      }
      console.log(`
      Nome ${user.name},
      Endereco ${address.street}, ${address.number}
      Telefone ${phone.ddd}, ${phone.phone}
      `)
    })
  })
})
// const phone = getPhone(user.id)

// console.log('telefone', phone)