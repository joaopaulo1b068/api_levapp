import { HashPass } from "../src/libs/password"

describe('Geracao de Hash de Senha', () => {

  test('PBKDF2 -- Salt Fixo', () => {
    const hash = HashPass('password-1234', 'lone-star', 500, 8, 'sha256')
    const spected = 'lone-star&ecb688af4b417130&500&8&sha256'
    expect(hash.encrypted).toBe(spected)
  })

  test('PBKDF2 -- Salt Dinamico', () => {
    const hash = HashPass('3BA2GU05LZ').encrypted
    const arr = hash.split('&')
    expect(arr).toHaveLength(5)
    // salt
    expect(arr[0]).toHaveLength(10)
    //hash
    expect(arr[1]).toHaveLength(32)
    //interactions
    expect(parseInt(arr[2])).toBe(1000)
    //keylen
    expect(parseInt(arr[3])).toBe(16)
    //digest algorithm
    expect(arr[4]).toBe('sha512')
  })

})