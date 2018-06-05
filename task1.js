var i   = String(process.argv[2]).toUpperCase(),
    a   = parseInt(process.argv[3]),
    b   = parseInt(process.argv[4]);
    ind = i.search(/[,.]/);

var literals = {A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, J: 16, H: 17, I: 18,
	  	J: 19, K: 20, L: 21, M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27,
		S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35};

function answer(i, a, b) {
  var result, temp;
  if (a == 10 && b == 10) {
    result = i;
  } else if (a == 10) {
    result = fromDecimalNotation(i, b);
  } else if (b == 10) {
    result = toDecimalNotation(i, a);
  } else {
    temp   = toDecimalNotation(i, a);
    result = fromDecimalNotation(temp, b);
  }
  return result;
}

if (isNumeric(a) && isNumeric(b)) {
  var i_temp;
  (a !== 10) ? i_temp = toDecimalNotation(i, a) : i_temp = i;
  if (i_temp >= 0 && i_temp <= 10000 && a >= 2 && b <= 36 && ind == -1) {
    process.stdout.write(String(answer(i, a, b)));
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function toDecimalNotation(num, sn) {
  var result = 0,
      sNum   = String(num);
      aNum   = sNum.split("").reverse();

  for (var j = aNum.length - 1; j >= 0; j--) {
    if (sn > 10) {
      if (aNum[j] in literals) {
	aNum[j] = literals[aNum[j]];
      }
    } 
    result += aNum[j] * Math.pow(sn, j);
  }	
  return result;
}

function fromDecimalNotation(num, sn) {
  var sNum      = String(num);
      dividend  = parseInt(sNum), 
      new_floor = [], 
      mod       = 0;
	    
  while (dividend !== 0) {
    mod = dividend % sn;
    if (sn > 10) {
      mod = search(mod);
    }
    dividend = ((dividend / sn) > 0) ? Math.floor(dividend / sn) : Math.ceil(dividend / sn); 
    if (mod < 0) {
      mod += (sn * (-1));
      dividend += 1;
    }
    new_floor.push(mod);
  }		
  return new_floor.reverse().join("");
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
