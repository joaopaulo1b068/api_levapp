/**
 * @param {number} max
 * @returns {number} ==> numero entre 0 e max-1 
 */
export function SortNum(max) {
  if (typeof max !== 'number') return 0
  return Math.floor(Math.random() * max)
}

const numbers = [
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '0'
]

const alpha = [
  'A', 'B', 'C', 'D', 'E', 
  'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 
  'U', 'V', 'X', 'Z', 'W', 
  'Y'
]

const alphaNumeric = [
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '0',
  'A', 'B', 'C', 'D', 'E', 
  'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 
  'U', 'V', 'X', 'Z', 'W', 
  'Y'
]

/**
 * @param {number} n => tamanho do id 
 */
export function GetID(n, type = "numeric") {
  if (typeof n !== 'number' || n < 1) n = 1

  let iterable = numbers

  switch(type) {
    case 'alpha': {
      iterable = alpha
      break
    }
    case 'numeric': {
      iterable = numbers
      break
    }
    case 'alphanumeric': {
      iterable = alphaNumeric
      break
    }
    default: {
      iterable = numbers
    }
  }

  const arr = []
  while (arr.length < n) {
    const pos = SortNum(iterable.length)
    arr.push(iterable[pos])
  }
  return arr.join('')
}