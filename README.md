# split-tracklist

[![Build Status](https://travis-ci.org/ewnd9/split-tracklist.svg?branch=master)](https://travis-ci.org/ewnd9/split-tracklist)

split tracklist text to object contains artist and title of each track

## Install

```
$ npm install split-tracklist --save
```

## Usage

```javascript
var splitTracklist = require('split-tracklist');
var tracklist = ['artist1 - title1', 'artist2 - title2 [label]'].join('\n');
var tracks = splitTracklist(tracklist);

/*
[
  {
    track: 'artist1 - title1',
    artist: 'artist1',
    title: 'title1'
  },
  {
    track: 'artist2 - title2'
    artist: 'artist2',
    title: 'title2',
    comment: 'label'
  }
]
 */
```

## License

MIT © [ewnd9](http://ewnd9.com)
