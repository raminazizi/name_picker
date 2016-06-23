var wdi_24_names = ["Adrianna", "Andrew", "Christian",
"Daniel", "David", "Desi", "Emily", "Jenny", "Kate",
"Kevin", "Matt", "Michael", "Ramin", "Taylor"];



function eachname(){
  var i= Math.floor((Math.random()* wdi_24_names.length));
console.log(wdi_24_names[i]);

// take out the used index
wdi_24_names.splice(i,1);

// After you take all out
if (wdi_24_names.length == 0){
  console.log("Called everyone once")
  wdi_24_names.push("Adrianna", "Andrew", "Christian",
  "Daniel", "David", "Desi", "Emily", "Jenny", "Kate",
  "Kevin", "Matt", "Michael", "Ramin", "Taylor");
}
}
