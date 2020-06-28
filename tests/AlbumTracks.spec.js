import 'jsdom-global/register'
import { expect } from 'chai'
import renderAlbumTracks from '../src/AlbumTracks'
import renderConvertToHumanTime from '../src/ConvertToHumanTime'

describe('AlbumTracks', () => {

  const data = [
    {
      'preview_url': '',
      'track_number': 1,
      'name': 'Bubba',
      'duration_ms': 238733,
    }
  ]

  const dataTwo = [
    {
      'preview_url': '',
      'track_number': 1,
      'name': 'Bubba',
      'duration_ms': 238733,
    },
    {
      'preview_url': '',
      'track_number': 2,
      'name': 'Nemo',
      'duration_ms': 238735,
    }
  ]

  const markup = `
  <div class="music" data-track-preview="">
    <p class="music-number">1</p>
    <p class="music-title">Bubba</p>
    <p class="music-duration">${renderConvertToHumanTime(238733)}</p>
  </div>`

  const markupTwo = `
  <div class="music" data-track-preview="">
    <p class="music-number">1</p>
    <p class="music-title">Bubba</p>
    <p class="music-duration">${renderConvertToHumanTime(238733)}</p>
  </div>
  <div class="music" data-track-preview="">
    <p class="music-number">2</p>
    <p class="music-title">Nemo</p>
    <p class="music-duration">${renderConvertToHumanTime(238735)}</p>
  </div>`

  it('Should be exist AlbumTracks', () => {
    expect(renderAlbumTracks).to.exist
  })

  it('Should be create and append the markup given a correct data ', () => {
    const element = document.createElement('div')
    renderAlbumTracks(data, element)

    expect(element.innerHTML).to.be.eql(markup)
  })

  it('Should be create and append the markup when more than one', () => {
    const elementTwo = document.createElement('div')
    renderAlbumTracks(dataTwo, elementTwo)

    expect(elementTwo.innerHTML).to.be.eql(markupTwo)
  })
})