import { GetID } from "../src/libs/ids"

describe('Geração de IDS', () => {

  test('ID Alfanumerico', () => {
    const id = GetID(256, 'alphanumeric')
    expect(id.length).toBe(256)
    expect(id.includes('A')).toBe(true)
    expect(id.includes('1')).toBe(true)
  })

  test('ID Alfabetico', () => {
    const id = GetID(256, 'alpha')
    expect(id.length).toBe(256)
    expect(id.includes('A')).toBe(true)
    expect(id.includes('1')).toBe(false)
  })

  test('ID Numerico', () => {
    const id = GetID(256, 'numeric')
    expect(id.length).toBe(256)
    expect(id.includes('A')).toBe(false)
    expect(id.includes('1')).toBe(true)
  })

})
