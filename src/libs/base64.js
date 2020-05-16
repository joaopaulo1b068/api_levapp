export function EncodeBase64 (str) {
    const buff = new Buffer(str)
    return buff.toString('base64')
}

export function DecodeBase64 (str) {
    const buff = new Buffer(str, 'base64')
    return buff.toString('ascii')
}
