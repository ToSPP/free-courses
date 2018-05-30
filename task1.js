/* Task 1 */

var i = parseFloat(process.argv[2]),
    a = parseInt(process.argv[3]),
    b = parseInt(process.argv[4]);

var literals = {A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, J: 16, H: 17, I: 18,
	  			J: 19, K: 20, L: 21, M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27,
				S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35};

function answer(i, a, b) {
  var result, temp;
  if (a == 10) {
	result = fromDecimalNotation(i, b);
  } else {
	temp   = toDecimalNotation(i, a);
	result = fromDecimalNotation(temp, b);
  }
  return result;
}

if (isNumeric(a) && isNumeric(b)) {
  if (i >= 0 && i <= 10000 && a >= 1 && b <= 36) {
    process.stdout.write(String(answer(i, a, b)));
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function toDecimalNotation(num, sn) {
  var result = 0,
  sNum   = String(num);
  sNum = sNum.split(/[,.]/);
  var floor   = sNum[0],
      decimal = sNum[1],
	  sFloor, 
	  sDecimal;
    	
  sFloor = floor.split("").reverse();
  for (var j = sFloor.length - 1; j >= 0; j--) {
	if (sn >= 10) {
  	  if (sFloor[j] in literals) {
		sFloor[j] = literals[sFloor[j]];
	  }
	} 
	result += sFloor[j] * Math.pow(sn, j);
  }
	
  if (typeof decimal != "undefined") {
	sDecimal = decimal.split("");
	for (var k = 1; k <= sDecimal.length; k++) {
 	  result += sDecimal[k - 1] * Math.pow(sn, -k);
	}
  }

  return result;
}

function fromDecimalNotation(num, sn) {
  var result = 0,
      sNum   = String(num);
  sNum = sNum.split(/[,.]/);
  var floor   = sNum[0],
      decimal = sNum[1],
      dividend = parseInt(floor), 
  	  fraction = parseFloat("0." + decimal),
	  new_floor = [], 
	  new_decimal = [],
	  mod, 
	  part;
	    
  while (dividend !== 0) {
	mod = dividend % sn;
	if (sn >= 10) {
	  mod = search(mod);
	}
	new_floor.push(mod);
	dividend = Math.floor(dividend / sn);
  }
	
  while (fraction !== 0) {
	part = Math.floor(fraction * sn);
	if (sn >= 10) {
	  part = search(part);
	}
	new_decimal.push(part);
	fraction = fraction * sn - Math.floor(fraction * sn);
	if (new_decimal.length > 10) {
	  fraction = 0;
	}
  }
	
  new_floor = new_floor.reverse().join("");
  new_decimal = new_decimal.join("");
  result = (new_decimal) ? new_floor + "." + new_decimal : new_floor;

  return result;
}

function search(num) {
  for (var key in literals) {
    if (num == literals[key]) {
	  num = key;
	  break;
    }
  }
  return num;
}
