import { expect } from 'chai'
import { sum, sub, div, mult } from '../src/mainCalculator.js'

describe('Main Js', () => {
  //smoke tests
  describe('Smoke tests calculator', () => {

    it('Should exist the method SUM', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('Should exist the method SUB', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('Should exist the method MULT', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })

    it('Should exist the method DIV', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })

  describe('SUM', () => {
    it('Shoul return 4 when SUM(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })
  })

  describe('SUB', () => {
    it('Should return 3 when SUB(10,7)', () => {
      expect(sub(10, 7)).to.be.equal(3)
    })

    it('Shoul return -3 when SUB(12, 9)', () => {
      expect(sub(9, 12)).to.be.equal(-3)
    })
  })

  describe('MULT', () => {
    it('Should return 10 when MULT(5,2)', () => {
      expect(mult(5, 2)).to.be.equal(10)
    })
  })

  describe('DIV', () => {
    it('Should return 1 when DIV(15, 15)', () => {
      expect(div(15, 15)).to.be.equal(1)
    })

    it('Should return ´Do not divide by zero!´ when divide by zero', () => {
      expect(div(3, 0)).to.be.equal('Do not divide by zero!')
    })

  })
})