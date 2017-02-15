var input=prompt("try a sentence");
console.log (input);

var first=input.charAt(0);
var last=input.substr(-1);

var words=first.concat(last)
var capital=words.toUpperCase();

var rev1= capital.charAt(1);
var rev2= capital.charAt(0);

var rev=rev1.concat(rev2);

var final=input.concat(rev);

var length=input.length
var divide=length/2

var centerletter=input.charAt(divide);
var finale=centerletter.concat(final);

var frev=finale.split("").reverse().join("");

jQuery("#img1").click(function() {
  alert(input);
});

jQuery("#img2").click(function() {
  alert(frev);
});
