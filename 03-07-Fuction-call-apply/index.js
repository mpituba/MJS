function sum (a, b) {
  console.log(this)
  return a + b
}

const me = { name: 'Jose' }

sum.call(me, 1, 2)

sum.apply(me, [1, 2])

