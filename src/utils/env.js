require('dotenv').config()

export function GetENV(key) {
    return process.env[key]
}