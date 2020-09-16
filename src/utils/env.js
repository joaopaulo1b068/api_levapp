require('dotenv').config()

export function GetENV(key) {
    console.log(key + ' ' + process.env[key])
    return process.env[key]

}