var stuff = ["ground", "control", "to", "major", "tom"];

function map(words, callback){
  var array = [];
  for(var i = 0; i < words.length; i++){
    array.push(callback(words[i]));
}
return array;
};

map(stuff, function(word) {
  return word.length;
});


