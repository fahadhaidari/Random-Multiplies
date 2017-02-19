function generateRandomMultipliers(multiplier, n, min, max) {
	
  var output = Array();
  var rndm   = 0;

  for (var i = 0; i < n; i ++) { rndm = Math.floor( ( Math.random() * max ) + min ); output.push( rndm = rndm - (rndm % multiplier) ); }

  return output;

}