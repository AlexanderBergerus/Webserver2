const express = require('express')
const labb = require('./labb')
const app = express()
const port = 3000

let sum = labb.add(1, 2) // 3
let dif = labb.sub(7, 1) // 6
let prod = labb.multi(3, 8) // 24
let div = labb.div(8, 2) // 4

console.log("Summan Är: " + sum + " differensen: " + dif + "produkten är: " + prod + "divisionen är: " + div )
