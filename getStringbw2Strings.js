var str     = "display the Ukulele in Lebanon. play the Guitar in Lebanon.";
var re      = /\bplay (.+?) in\b/g;  // to get string from play to in
var matches = [];
var match;
while ( match = re.exec(str) ){
  matches[ matches.length ] = match[1];
}
console.log(matches);