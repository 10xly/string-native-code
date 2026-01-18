const concat = require("@rightpad/concat")

const a = require("@lowercase-letters/a")
const c = require("@lowercase-letters/c")
const d = require("@lowercase-letters/d")
const e = require("@lowercase-letters/e")
const i = require("@lowercase-letters/i")
const n = require("@lowercase-letters/n")
const o = require("@lowercase-letters/o")
const t = require("@lowercase-letters/t")
const v = require("@lowercase-letters/v")

const leftBracket = require("@characters/left-square-bracket")
const rightBracket = require("@characters/right-square-bracket")

const SPACE = require("space-string")

const NATIVE_CODE = concat(leftBracket,n,a,t,i,v,e,SPACE,c,o,d,e,rightBracket)

module.exports = NATIVE_CODE // expose the string "[native code]"