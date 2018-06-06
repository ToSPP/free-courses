var i   = String(process.argv[2]).toLowerCase(),
    a   = parseInt(process.argv[3]),
    b   = parseInt(process.argv[4]);

var literals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var i_temp;
(a !== 10) ? i_temp = toDecimalNotation(i, a) : i_temp = i;
if (i_temp >= 0 && i_temp <= 10000 && a >= 2 && b <= 36) {
    process.stdout.write(answer(i, a, b));
}

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

function toDecimalNotation(num, sn) {
  var result = 0, a = 0;
  for (var j = 0; j < num.length; j++) {
    a = (sn > 10 && literals.indexOf(num.substr(j, 1)) != -1) ? literals.indexOf(num.substr(j, 1)) + 10 : num.substr(j, 1);
    result += a * Math.pow(sn, num.length - 1 - j);
  } 
  return result.toString();
}

function fromDecimalNotation(num, sn) {
  var dividend  = parseInt(num), 
      result    = [], 
      remainder = 0;     
  while (dividend !== 0) {
    remainder = (sn > 10 && ((dividend % sn) > 10)) ? literals[(dividend % sn) - 10] : dividend % sn; 
    dividend  = ((dividend / sn) > 0) ? Math.floor(dividend / sn) : Math.ceil(dividend / sn); 
    if (remainder < 0) {
      remainder += (sn * (-1));
      dividend  += 1;
    }
    result.push(remainder);
  }   
  return result.reverse().join("").toString();
}
