var fs = require('fs');                                                                                                                                                                                                                  [0/33]
var expect = require('chai').expect;

describe('spec', () => {

  var splitTracklist = require('./../src/index');

  it('example-1', () => {
    var text = fs.readFileSync('./test/example-01.txt', 'utf-8');
    var result = splitTracklist(text);

    expect(result.length).to.equal(23);

    // Noisia & The Upbeats - Mouthbreather [VISION]
    expect(result[0].track).to.equal('Noisia & The Upbeats - Mouthbreather');
    expect(result[0].artist).to.equal('Noisia & The Upbeats');
    expect(result[0].title).to.equal('Mouthbreather');
    expect(result[0].comment).to.equal('VISION');
  });

  it('example-2', () => {
    var text = fs.readFileSync('./test/example-02.txt', 'utf-8');
    var result = splitTracklist(text);
    expect(result.length).to.equal(21);

    // Sabre -Yoga (Alix Perez Remix) [PLASMA]
    expect(result[1].track).to.equal('Sabre -Yoga (Alix Perez Remix)');
    expect(result[1].artist).to.equal('Sabre');
    expect(result[1].title).to.equal('Yoga (Alix Perez Remix)');
    expect(result[1].comment).to.equal('PLASMA');
  });

});
