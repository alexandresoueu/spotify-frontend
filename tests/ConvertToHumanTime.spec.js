import { expect } from 'chai'
import renderConvertToHumanTime from '../src/ConvertToHumanTime'

describe.only('Convert to Human Time', () => {
  it('Should be exist renderConvertToHumanTime', () => {
    expect(renderConvertToHumanTime).to.be.exist
  })
  
  it('Should receive 0ms and convert to 0:00', () => {
    expect(renderConvertToHumanTime(0)).to.be.equal('0:00')
  })

  it('Should receive 1000ms and convert to 0:01', () => {
    expect(renderConvertToHumanTime(1000)).to.be.equal('0:01')
  })

  it('Should receive 11000ms and convert to 0:11', () => {
    expect(renderConvertToHumanTime(11000)).to.be.equal('0:11')
  })

  it('Should receive 60000ms and convert to 1:00', () => {
    expect(renderConvertToHumanTime(60000)).to.be.equal('1:00')
  })
})
