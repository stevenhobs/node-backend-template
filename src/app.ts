import { log } from 'console'
import { add } from './math/add'
const a = 1
const b = 2

let res: number = add(a, b)

log(`${a} + ${b} = ${res}`)

print(1, false, null, 'String')
function print(...args: any) {
  log(...args)
}
