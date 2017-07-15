export function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        name: 'Iván Munguía',
        avatar: 'https://avatars5.githubusercontent.com/u/10677789?v=4&u=bfa1469f5e796d5da4206b8d9596dbfcacf0ac0b&s=400',
        uid: 'warborn',
      })
    }, 2000)
  })
}

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout () {
  console.log('logged out')
}