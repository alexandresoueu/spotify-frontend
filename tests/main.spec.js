import { expect } from 'chai'
import FizzBuzz from '../src/main'

describe('Main', () => {
  
  it('Should return 0 when the number is 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0)
  })

  it('Should return FIZZ when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz')
    expect(FizzBuzz(6)).to.be.equal('Fizz')
  })

  it('Should return BUZZ when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz')
  })

  it('Shoul return FIZZBUZZ when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
  })

  it('Should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7)
  })
})