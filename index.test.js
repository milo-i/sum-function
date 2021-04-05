const sum = require('./index.js')


test('does sum function add two numbers properly', () => {
 expect(sum(2, 3)).toBe(5)
})

