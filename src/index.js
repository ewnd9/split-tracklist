// https://regex101.com/#javascript tests
let splitToArtistAndTitle = (text) => {
  var regExps = [];

  regExps.push(/[\d\.\s]*((.+)\s[\-\–]\s(.+))\s\[(.*)\]/); // full template $artist - $title [$label]
  regExps.push(/[\d\.\s]*((.+)\s[\-\–]\s(.+))/);           // without label comment $artist - $title
  regExps.push(/[\d\.\s]*((.+)\s[\-\–](.+))\s\[(.*)\]/);   // assume typo like $artist -$title [$label]
  regExps.push(/[\d\.\s]*((.+)[\-\–]\s(.+))\s\[(.*)\]/);   // assume typo like $artist- $title [$label]
  regExps.push(/[\d\.\s]*((.+)[\-\–](.+))\s\[(.*)\]/);     // assume typo like $artist-$title [$label]

  // all that mess with typo variatins comes from aware of artist and tracks who contains '-' itself

  var result = null;
  regExps.forEach((regExp) => {
    if (!result) {
      var test = text.match(regExp);
      if (test) {
        result = test;
      }
    }
  });

  return result;
};

export default (text) => {
  var lines = (typeof text === 'string') ? text.split('\n') : text;

  var xs = lines.map((line) => {
    var x = splitToArtistAndTitle(line);

    if (x) {
      var result = {};

      result.track = x[1].trim().replace(/&amp;/g, '&');
      result.artist = x[2].trim().replace(/&amp;/g, '&');
      result.title = x[3].trim().replace(/&amp;/g, '&');

      if (x[4]) {
        result.comment = x[4].trim();
      }

      return result;
    } else {
      return null;
    }
  });

  return xs.filter((x) => x !== null);
};
