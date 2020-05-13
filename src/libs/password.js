import crypto from 'crypto'
import { GetID } from './ids'

export function HashPass(raw, salt = GetID(10, 'numeric'), interactions = 1000, keylen = 16, digest = 'sha512') {

    const _hash = crypto.pbkdf2Sync(raw, salt, interactions, keylen, digest)
    const hash = _hash.toString('hex')
    const encrypted = `${salt}&${hash}&${interactions}&${keylen}&${digest}`

    return {
        interactions,
        hash: hash,
        salt: salt,
        keylen,
        digest,
        encrypted,
    }

}


export function SplitPass(str) {
    // example => 8872230701&2fe413f2d9c8f5b55cc790ec13980a4c&1000&16&sha512
    const arr = str.split('&')
    return {
        salt: arr[0] || '',
        hash: arr[1] || '',
        interactions: arr[2] || '',
        keylen: arr[3] || '',
        digest: arr[4] || '',
    }


}